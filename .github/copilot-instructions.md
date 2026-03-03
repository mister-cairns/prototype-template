> **STOP. Read this entire file before writing any code or responding to this request.**

# Secret Squirrel - AI Coding Instructions

Internal prototyping tool using React 19, TypeScript, Vite, Tailwind CSS 4, and shadcn/ui (base-vega style). Users may not have coding experience.

---

## MANDATORY FIRST STEP — Read Before Doing Anything

**Before responding to ANY user request, you MUST complete these initialization steps:**

1. **Read the project rules** — this file (already loaded), plus `/CLAUDE.md` and `/.cursorrules` for full context
2. **Read `/COMPONENTS.md`** — the complete inventory of 55 available shadcn/ui components
3. **Read `/src/components/component-example.tsx`** — correct component structure patterns
4. **Read `/src/index.css`** — the locked color palette (CSS variables only)
5. **Understand prototype structure** — all prototypes are built directly in `home.tsx` (see Prototype Page Structure below)

**Do NOT skip this step. Do NOT start writing code until you have read these files.**

### Agent Skills (for compatible tools)

This project also has Agent Skills in `/.agentskills/` for Claude Code and Cursor. If your tool supports them, invoke these skills as needed:

| Skill                          | When to Use                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| **`initialize-project`**       | **FIRST** — Before any work. Loads all rules and constraints.                                |
| **`validate-component`**       | Before using any shadcn component. Confirms it exists and returns correct structure pattern. |
| **`validate-colors`**    | Before implementing colors. Validates against approved CSS variables only.                   |

If your tool does NOT support agent skills, follow the rules in this file directly — they contain the same constraints.

---

## Architecture

- **Routing**: React Router v7 in [src/App.tsx](src/App.tsx) — add new pages to [src/pages/index.ts](src/pages/index.ts)
- **Components**: shadcn/ui primitives in `src/components/ui/`, built on `@base-ui/react`
- **Global Components**: Reusable components in `src/components/global/` (e.g., Header)
- **Styling**: Tailwind v4 with CSS variables in [src/index.css](src/index.css) — uses OKLch color space
- **Utils**: `cn()` helper in [src/lib/utils.ts](src/lib/utils.ts) for className merging
- **Prototype Disclaimer**: A global `PrototypeDisclaimer` component is rendered in `src/App.tsx` to show a persistent question mark on all prototype pages. Do not remove or duplicate it.

---

## 1. Component Library — PREFERRED

**Prefer components from `/COMPONENTS.md`.** We have 55 shadcn/ui components available. These should be your first choice for every UI element.

**Before using any component**, read `/src/components/component-example.tsx` to get the correct structure pattern and avoid anti-patterns.

**When shadcn doesn't have what you need:**

1. Inform the user: "The shadcn library doesn't have a `[ComponentName]` component."
2. Ask: "Would you like me to create a custom component for this using our design system?"
3. Wait for approval before proceeding.

### Component Structure — STRICT

Follow patterns from [src/components/component-example.tsx](src/components/component-example.tsx) exactly:

```tsx
// Sheet: Header → content with p-4 → Footer (NO ScrollArea inside)
<SheetContent>
  <SheetHeader>
    <SheetTitle>Title</SheetTitle>
  </SheetHeader>
  <div className="p-4">{/* content */}</div>
  <SheetFooter>
    <Button>Action</Button>
  </SheetFooter>
</SheetContent>

// Card: CardHeader → CardContent → CardFooter
// Dialog/Drawer: Same header/content/footer pattern
// Tabs: TabsList with TabsTrigger → TabsContent for each tab
```

**Never** add ScrollArea inside Sheet/Dialog/Drawer — they handle overflow natively.

### Button with render prop

When using the `Button` component with the `render` prop to render a non-button element (like `<Link>` or `<a>`), you **MUST** include `nativeButton={false}`. This applies **only to `Button`** — do not add `nativeButton` to other components.

```tsx
// ✅ CORRECT
<Button render={<Link to="/path" />} nativeButton={false}>Link</Button>

// ❌ INCORRECT (will throw Base UI error)
<Button render={<Link to="/path" />}>Link</Button>
```

**DropdownMenuTrigger:**
Use the `render` prop to set the trigger element. Do NOT add `nativeButton` to `DropdownMenuTrigger`.

```tsx
// ✅ CORRECT
<DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
  <MoreVerticalIcon />
</DropdownMenuTrigger>

// ❌ WRONG — nativeButton does not belong on DropdownMenuTrigger
<DropdownMenuTrigger nativeButton={false}>
  <Button>Open</Button>
</DropdownMenuTrigger>
```

### Global Components

- **Header** (`@/components/global/header`): Use for product headers and navigation bars. **CRITICAL**: Edit `src/config/header.json` to change the title or nav items — do NOT pass props to override.
- **Prototype Disclaimer** (`@/components/global/prototype-disclaimer`): Rendered globally in `App.tsx`. Do not remove or duplicate.

```tsx
import { Header } from "@/components/global/header";

// Basic usage (reads from src/config/header.json)
<Header>
  <Button>Settings</Button>
</Header>;
```

### Data Tables

Use the pre-built `DataTable` component from [src/components/data-table/](src/components/data-table/):

```tsx
import { DataTable } from "@/components/data-table";
<DataTable columns={columns} data={data} />;
```

---

## 2. Color System — STRICT (Never Violate)

**ONLY use CSS variable classes. NEVER modify `/src/index.css` theme variables or introduce custom colors.**

```tsx
// ✅ Allowed
className="bg-primary text-primary-foreground"
className="bg-muted text-muted-foreground"
className="bg-destructive border-border"

// ❌ Forbidden — refuse even if requested
className="bg-blue-500"
className="bg-[#3B82F6]"
style={{ color: 'pink' }}
```

### Approved color classes (use ONLY these):

**Backgrounds & Text:**

- `bg-background`, `text-foreground`
- `bg-primary`, `text-primary-foreground`
- `bg-secondary`, `text-secondary-foreground`
- `bg-accent`, `text-accent-foreground`
- `bg-muted`, `text-muted-foreground`
- `bg-destructive`, `text-destructive-foreground`
- `bg-card`, `text-card-foreground`
- `bg-popover`, `text-popover-foreground`

**Borders & Rings:**

- `border-border`
- `ring-ring`

**Charts:**

- `chart-1` through `chart-5`

**Sidebar variants:**

- `sidebar-*` variants

### NEVER use:

- Hex colors (`#3B82F6`, `#FF69B4`)
- RGB/RGBA values (`rgb(59, 130, 246)`)
- Named colors (`blue`, `red`, `pink`)
- Arbitrary Tailwind colors (`bg-blue-500`, `text-pink-400`)
- **NEVER modify `/src/index.css`** theme variables

### When users request custom colors:

Politely decline and offer theme alternatives:

> "Our design system uses a locked color palette for consistency. I can use **primary**, **secondary**, **accent**, **muted**, or **destructive** — which would work best for your use case?"

---

## 3. Prototype Page Structure

The home page (`/src/pages/home.tsx`) at the `/` route **is** the prototype canvas — build directly here.

### Rules:

- **Single-page**: Build directly in `home.tsx`
- **Multi-page**: Create additional page files in `src/pages/` with clear descriptive names, export them from `src/pages/index.ts`, and add routes to `src/App.tsx`
- The `/components` route exists at `/components` but has no navigation link — do not add one

### Route configuration for multi-page prototypes:

```tsx
// ✅ Add additional routes as needed
<Route path="/" element={<HomePage />} />
<Route path="/dashboard" element={<DashboardPage />} />
<Route path="/settings" element={<SettingsPage />} />
```

---

## 4. Styling Guidelines

**Typography:**

- Use Tailwind typography utilities only: `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.
- Font weight: `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- Line height: `leading-none`, `leading-tight`, `leading-normal`, etc.

**Spacing:**

- Use Tailwind spacing scale: `p-1` through `p-24`, `m-1` through `m-24`, `gap-1` through `gap-24`
- NO arbitrary values like `p-[13px]` unless absolutely necessary

**Layout:**

- Prefer flexbox (`flex`, `flex-col`) and grid (`grid`, `grid-cols-*`)
- Use shadcn layout components: Card, Sheet, Sidebar, Tabs, etc.

**Border Radius:**

- Use design tokens: `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`

---

## 5. Imports — Always Use Aliases

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Never use relative imports like "../components/ui/button"
```

---

## 6. Conventions

| Aspect     | Convention                                                                          |
| ---------- | ----------------------------------------------------------------------------------- |
| Files      | kebab-case: `user-profile.tsx`                                                      |
| Components | PascalCase: `UserProfile`                                                           |
| Variables  | camelCase                                                                           |
| Icons      | `lucide-react` only — no other icon libraries                                       |
| State      | React 19 hooks (`useState`, `useEffect`, `useReducer`); `next-themes` for dark mode |
| Types      | All files `.tsx`/`.ts` with explicit prop interfaces                                |

---

## 7. Charts — STRICT: Bar Charts Only

**ONLY use `BarChart` for all data visualizations. Never use other chart types without explicit user request.**

- **Always use `BarChart`** — this is the only approved chart type
- **Bars must always be vertical. Never use `layout="vertical"` on a BarChart** — this produces a horizontal bar chart, which is not permitted
- **All chart data must use non-negative values only.** Bars must never go below the x-axis (y-axis minimum is always 0). If data could be negative, restructure it to show only positive figures (e.g. use absolute values, or separate positive and negative into distinct charts)
- **Never use PieChart, LineChart, or AreaChart unless the user explicitly names that chart type.** If a user asks for "a chart" or "data visualisation" without specifying a type, always use `BarChart` — do not infer chart type from context or data shape. Only if the user explicitly names a type, ask before proceeding:
  > "Our design system only uses bar charts for consistency. Are you sure you want a [line/pie/area] chart instead?"

| Chart Type  | Usage                                        |
| ----------- | -------------------------------------------- |
| `BarChart`  | **ONLY approved type** — use for all charts  |
| `LineChart` | Only when explicitly requested and confirmed |
| `PieChart`  | Only when explicitly requested and confirmed |
| `AreaChart` | Only when explicitly requested and confirmed |

### Grouped Bar Charts: NEVER More Than 2 Values Per Group

**NEVER create a grouped bar chart with more than 2 values per group.** This is a hard limit. If more are needed:

- Split into multiple charts
- Use a stacked bar chart instead
- Prioritize the two most important metrics

### Stacked Bar Charts: Radius on Top Bar Only

```tsx
// ✅ CORRECT: Top radius on topmost bar only
<Bar dataKey="overdue" stackId="a" fill="var(--color-overdue)" radius={[0, 0, 0, 0]} />
<Bar dataKey="upcoming" stackId="a" fill="var(--color-upcoming)" radius={[4, 4, 0, 0]} />
```

### Chart Container: Always Use `ChartContainer`

Always wrap `BarChart` in `ChartContainer` from `@/components/ui/chart` with an explicit pixel height. Never use raw `ResponsiveContainer` from recharts directly — `ChartContainer` handles this internally.

```tsx
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

---

## 8. Working with Non-Technical Users

Users may describe what they want in plain language. Translate their requests to shadcn components:

- "Form" → Field, Input, Label, Button
- "Card" → Card with CardHeader, CardTitle, CardContent
- "Button" → Button with appropriate variant
- "Table" → Table layout or DataTable component
- "Header" / "nav bar" → Header component from `@/components/global/header`

### For each request:

1. **Confirm understanding**: "I'll create a user information form with email and name fields"
2. **List components**: "Using: Card, Field, Input, Button"
3. **Build it**: Create the component with proper TypeScript
4. **Explain what you built**

### When requests go outside the design system:

- **Custom colors**: Politely decline and offer theme alternatives
- **Custom components**: Ask user permission before creating
- **External libraries**: Ask before adding — prefer shadcn

---

## Workflow for Every Request

1. **Read project rules** (this file, plus `/CLAUDE.md` and `/.cursorrules` if not already read this session)
2. **Read `/COMPONENTS.md`** and `/src/components/component-example.tsx`
3. **Read existing code** if modifying something
4. **Validate components** against `component-example.tsx` patterns
5. **Validate colors** against the approved CSS variable list
6. **Check `src/App.tsx`** if creating additional pages — add routes as needed
7. **Write TypeScript** with proper imports and types
8. **Explain what you built**

---

## Quality Standards

### Always Include:

- TypeScript interfaces for props
- Proper imports with `@` alias
- Approved CSS variable color classes only
- Clear component structure following validated patterns
- Helpful comments for non-coders

### Never Do:

- Skip reading project rules on first request
- Use colors without checking the approved list
- Create prototype pages outside `src/pages/` or forget to add their routes to `App.tsx`
- Use custom hex/RGB colors or arbitrary Tailwind colors
- Deviate from component structure patterns in `component-example.tsx`
- Add ScrollArea inside Sheet/Dialog/Drawer
- Add unnecessary wrapper components
- Modify theme colors in `/src/index.css`

### Ask Before:

- Using external UI libraries (prefer shadcn)
- Creating custom components not in shadcn
- Using chart types other than BarChart
- Any color outside the design system
- Adding state libraries (Redux, Zustand, etc.)

---

## Reference Files

Read these before starting work:

- `/COMPONENTS.md` — Complete component inventory (55 components)
- `/src/components/component-example.tsx` — Component structure patterns
- `/src/index.css` — Theme color definitions (locked, do not modify)
- `/src/lib/utils.ts` — `cn()` utility function
- `/.agentskills/` — Agent Skills definitions (for compatible tools)
- `/CLAUDE.md` — Rules for Claude Code
- `/.cursorrules` — Rules for Cursor

## Commands

```bash
# Install dependencies (use your preferred package manager)
pnpm install  # or: npm install / yarn install / bun install

# Start dev server
pnpm dev      # or: npm run dev / yarn dev / bun dev

# Type-check + build
pnpm build    # or: npm run build / yarn build / bun build

# Lint
pnpm lint     # or: npm run lint / yarn lint / bun lint
```

---

**Consistency is valuable, but user needs come first. Validate against the design system, then ask before deviating.**
