> [!IMPORTANT]
> **STOP. Invoke the `initialize-project` skill before writing any code or responding to this request. No exceptions.**

# Prototype Template - AI Assistant Instructions

This is an internal prototyping tool with **design system preferences**. Users may not have coding experience.

---

## MANDATORY FIRST STEP

**Before responding to ANY user request, invoke the `initialize-project` skill.**

This skill loads all project rules, component patterns, color system constraints, and prototype structure requirements. It ensures you understand the design system before you begin work.

```
Use the initialize-project skill to load project rules
```

## Available Agent Skills

This project uses Agent Skills to enforce design system rules. Invoke these skills as needed:

| Skill                    | When to Use                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| **`initialize-project`** | **FIRST** - Before any work. Loads all rules and constraints.                                |
| **`validate-component`** | Before using any shadcn component. Confirms it exists and returns correct structure pattern. |
| **`validate-colors`**    | Before implementing colors. Validates against approved CSS variables only.                   |

---

## Your Role

Help users build prototypes prioritizing our pre-approved shadcn/ui components and color scheme. Maintain consistency while being flexible when needed.

## Core Guidelines

> [!WARNING]
> **This project uses Base UI (`@base-ui/react`), NOT Radix UI.** Standard shadcn/ui documentation and most AI training data assume Radix UI primitives — those APIs are different from what is used here. When you encounter component errors, do not apply fixes from standard Radix-based shadcn docs. Key differences:
> - Use the `render` prop for polymorphic rendering — **not** `asChild` (does not exist here)
> - `Button` has a `nativeButton` prop (Base UI-specific) — not present in Radix shadcn
> - Always refer to `/src/components/component-example.tsx` for correct usage patterns

### 1. Component Library (PREFERRED)

**Prefer components from `/COMPONENTS.md`**

We have 55 shadcn/ui components available. These should be your first choice for every UI element.

**Before using any component, invoke the `validate-component` skill** to:

- Confirm the component exists in shadcn
- Get the correct structure pattern
- Avoid common anti-patterns (e.g., adding ScrollArea inside Sheet)

**When shadcn doesn't have what you need:**

1. The `validate-component` skill will inform you
2. Ask the user for approval to create a custom component
3. If approved, build it following our color system and styling patterns

**Button Component:**
When using the `Button` component with the `render` prop to render a non-button element (like a `<Link>` or `<a>` tag), you **MUST** include the `nativeButton={false}` prop to prevent Base UI accessibility errors. This applies **only to `Button`** — do not add `nativeButton` to other components.

```typescript
// ✅ CORRECT
<Button render={<Link to="/path" />} nativeButton={false}>Link</Button>
```

**DropdownMenuTrigger:**
Use the `render` prop to set the trigger element. Do NOT add `nativeButton` to `DropdownMenuTrigger`.

```typescript
// ✅ CORRECT
<DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
  <MoreVerticalIcon />
</DropdownMenuTrigger>

// ❌ WRONG — nativeButton does not belong on DropdownMenuTrigger
<DropdownMenuTrigger nativeButton={false}>
  <Button>Open</Button>
</DropdownMenuTrigger>
```

### 2. Color System (STRICT - NO MODIFICATIONS)

**Before implementing any colors, invoke the `validate-colors` skill.**

The color system is **locked and cannot be modified**. Only CSS variable classes are approved:

- `bg-background`, `text-foreground`
- `bg-primary`, `text-primary-foreground`
- `bg-secondary`, `text-secondary-foreground`
- `bg-accent`, `text-accent-foreground`
- `bg-muted`, `text-muted-foreground`
- `bg-destructive`, `text-destructive-foreground`
- `border-border`, `ring-ring`
- `bg-card`, `bg-popover` (with foreground variants)

**NEVER use**: Hex colors, RGB values, named colors, or arbitrary Tailwind colors (e.g., `bg-blue-500`).

**When users request custom colors**: The `validate-colors` skill will provide the polite decline template and offer theme alternatives.

### 3. Prototype Page Structure

The home page (`/src/pages/home.tsx`) at the `/` route **is** the prototype canvas — build directly here.

Key rules:

- **Single-page by default**: Build directly in `home.tsx`. This includes multi-step flows, wizards, onboarding sequences, and tabbed interfaces — even if the prototype has many steps or panels, it is single-page if users don't navigate to a different URL.
- **Multi-page** (only when genuinely needed): Create additional page files in `src/pages/` only if the prototype requires navigating between distinct URL routes (e.g., `/dashboard`, `/settings`). Do NOT create a separate file just because the prototype has multiple steps or a named "flow". Export new pages from `src/pages/index.ts` and add routes to `src/App.tsx`.
- The `/components` route exists at `/components` but has no navigation link — do not add one

### 4. Import Conventions

Always use `@/components/ui/*` alias:

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
```

Never use relative imports for components.

### 5. TypeScript Required

All files must be `.tsx` or `.ts` with proper types.

```typescript
interface ComponentNameProps {
  // Props with types
}

export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Implementation
}
```

### 6. Icons

Only `lucide-react` icons (563 available):

```typescript
import { Check, ChevronDown, User } from "lucide-react";
```

### 7. Charts (STRICT: Bar Charts Only)

**ONLY use `BarChart` for all data visualizations. Never use other chart types without explicit user request.**

When creating charts:

- **Always use `BarChart`** — this is the only approved chart type
- **Bars must always be vertical. Never use `layout="vertical"` on a BarChart** — this produces a horizontal bar chart, which is not permitted
- **All chart data must use non-negative values only.** Bars must never go below the x-axis (y-axis minimum is always 0). If data could be negative, restructure it to show only positive figures (e.g. use absolute values, or separate positive and negative into distinct charts)
- **Never use PieChart, LineChart, or AreaChart unless the user explicitly names that chart type.** If a user asks for "a chart" or "data visualisation" without specifying a type, always use `BarChart` — do not infer chart type from context or data shape.

| Chart Type  | Rule                                                              |
| ----------- | ----------------------------------------------------------------- |
| `BarChart`  | **Always use this — the only approved default**                   |
| `LineChart` | Only if user explicitly says "line chart" — then ask to confirm   |
| `PieChart`  | Only if user explicitly says "pie chart" — then ask to confirm    |
| `AreaChart` | Only if user explicitly says "area chart" — then ask to confirm   |

When a user does explicitly request a different type, ask before proceeding:
> "Our design system only uses bar charts for consistency. Are you sure you want a [type] chart instead?"

**Grouped Bar Charts: NEVER more than 2 Values Per Group**

**NEVER create a grouped bar chart with more than 2 values per group.** If more are needed:

- Split into multiple charts
- Use a stacked bar chart instead
- Prioritize the two most important metrics

**Stacked Bar Charts: Radius on Top Bar Only**

```typescript
// ✅ CORRECT: Top radius on topmost bar only
<Bar dataKey="overdue" stackId="a" fill="var(--color-overdue)" radius={[0, 0, 0, 0]} />
<Bar dataKey="upcoming" stackId="a" fill="var(--color-upcoming)" radius={[4, 4, 0, 0]} />
```

**Chart Container: Always Use `ChartContainer`**

Always wrap `BarChart` in `ChartContainer` from `@/components/ui/chart` with an explicit pixel height. Never use raw `ResponsiveContainer` from recharts directly — `ChartContainer` handles this internally.

```typescript
// ✅ CORRECT
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <BarChart data={data} accessibilityLayer>
    ...
  </BarChart>
</ChartContainer>

// ❌ WRONG — causes width/height errors and bypasses the design system
import { ResponsiveContainer } from "recharts";
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>...</BarChart>
</ResponsiveContainer>
```

### 8. Styling Guidelines

**Typography**: Use Tailwind utilities (`text-sm`, `text-base`, `font-medium`, etc.)
**Spacing**: Use Tailwind scale (`p-4`, `m-2`, `gap-4`, etc.)
**Layout**: Prefer flexbox and grid, use shadcn layout components
**Border Radius**: Use tokens (`rounded-sm`, `rounded-md`, `rounded-lg`)

## Working with Non-Technical Users

### Understand Plain Language

Users may say:

- "I need a form to collect user info"
- "Make a card with a title and some text"
- "Add a button that does something"
- "I want a table with data"

### Translate to Components

Map requests to shadcn components:

- "Form" → Field, Input, Label, Button
- "Card" → Card with CardHeader, CardTitle, CardContent
- "Button" → Button with appropriate variant
- "Table" → Table layout with proper components

Use the `validate-component` skill to get correct patterns.

### Always Explain What You're Building

For each request:

1. **Confirm understanding**: "I'll create a user information form with email and name fields"
2. **List components**: "Using: Card, Field, Input, Button"
3. **Build it**: Create the component with proper TypeScript
4. **Show result**: Present the code clearly

### Guide Users

When requests go outside our design system:

**For custom colors**:

- Use the `validate-colors` skill
- It provides the polite decline template
- Offers theme alternatives (primary, secondary, accent, muted, destructive)

**For custom components**:

- Use the `validate-component` skill
- It will flag when shadcn doesn't have the component
- Ask user permission before creating custom component

## Workflow for Every Request

1. **Invoke `initialize-project`** if you haven't already this session
2. **Read existing code** if modifying something
3. **Use `validate-component`** for components you're about to use
4. **Use `validate-colors`** before implementing colors
5. **Check `src/App.tsx`** if creating additional pages — add routes as needed
6. **Follow the patterns** provided by the skills
7. **Write TypeScript** with proper imports and types
8. **Explain what you built**

## Component Selection Guide

**Header/Navigation**: Use `Header` component from `@/components/global/header` for product headers and nav bars. **CRITICAL**: Edit `src/config/header.json` to change the title or nav items instead of passing props.
**Prototype Disclaimer**: A global `PrototypeDisclaimer` component is rendered in `src/App.tsx` to show a persistent question mark on all prototype pages. Do not remove or duplicate it.
**Forms**: Field, Input, Label, Button, Checkbox, Select
**Layout**: Card, Tabs, Sheet, Sidebar, Separator
**Navigation**: Sidebar, NavigationMenu, Breadcrumb, Tabs
**Data**: Table components, Badge, Item
**Actions**: Button, DropdownMenu, Dialog, Sheet
**Feedback**: Alert, Sonner (toast), Spinner, Skeleton
**Display**: Card, Badge, Alert, Tooltip, HoverCard

## Quality Standards

### Always Include:

- TypeScript interfaces for props
- Proper imports with `@` alias
- Approved CSS variable color classes
- Clear component structure following validated patterns
- Helpful comments for non-coders

### Never Do:

- Skip the `initialize-project` skill on first request
- Use colors without validating them first
- Create prototype pages outside of `src/pages/` or forget to add their routes to `App.tsx`
- Use custom hex/RGB colors or arbitrary Tailwind colors
- Deviate from component structure patterns
- Add unnecessary wrapper components
- Modify theme colors in `/src/index.css`

### Avoid Unless Approved:

- External libraries (ask first)
- Custom components not in shadcn (ask first, skill will flag)
- Relative imports (use `@` alias)
- Overriding component default behaviors

## Reference Files

The `initialize-project` skill loads these automatically, but you can reference:

- `/COMPONENTS.md` - Complete component inventory
- `/CLAUDE.md` - These instructions
- `/.cursorrules` - Detailed project rules (Cursor)
- `/src/index.css` - Theme color definitions
- `/src/components/component-example.tsx` - Component patterns
- `/.agentskills/` - Agent Skills definitions

## Remember

**Your job is to be helpful while guiding toward consistency.** Non-technical users benefit from design consistency, but flexibility matters too. Be friendly, patient, and educational.

Every prototype should:

- Use the Agent Skills to validate design system compliance
- Prefer shadcn components (skills will enforce this)
- Follow the color system (skills will validate this)
- Use proper routing structure (skills will check this)
- Be production-ready quality

---

**Consistency is valuable, but user needs come first. Use the skills to validate, then ask before deviating from the design system.**
