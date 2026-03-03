> **STOP. Read this entire file before writing any code or responding to this request.**

# Secret Squirrel - AI Agent Instructions

Internal prototyping tool using React 19, TypeScript, Vite, Tailwind CSS 4, and shadcn/ui. Users may not have coding experience.

---

## MANDATORY FIRST STEP

Before responding to ANY request, complete these steps:

1. Read `/COMPONENTS.md` — the complete inventory of 55 available shadcn/ui components
2. Read `/src/components/component-example.tsx` — correct component structure patterns
3. Read `/src/index.css` — the locked color palette (CSS variables only)
4. Understand prototype structure — all prototypes live in `prototype.tsx` (see below)

**If your tool supports Agent Skills** (`.agentskills/` directory), invoke `initialize-project` instead — it handles all of the above automatically.

---

## Architecture

- **Routing**: React Router v7 — `src/App.tsx`
- **Components**: shadcn/ui primitives in `src/components/ui/`, built on `@base-ui/react`
- **Global Components**: `src/components/global/` (Header, PrototypeDisclaimer)
- **Styling**: Tailwind v4 with CSS variables in `src/index.css` — OKLch color space
- **Utils**: `cn()` helper in `src/lib/utils.ts`

---

## Rules

### 1. Components — Use shadcn First

We have 55 shadcn/ui components in `/COMPONENTS.md`. Always prefer these over custom solutions.

Read `/src/components/component-example.tsx` for the correct structure pattern before using any component.

**Critical patterns:**

```tsx
// Sheet: Header → content div with p-4 → Footer (NO ScrollArea inside)
<SheetContent>
  <SheetHeader><SheetTitle>Title</SheetTitle></SheetHeader>
  <div className="p-4">{/* content */}</div>
  <SheetFooter><Button>Action</Button></SheetFooter>
</SheetContent>

// Card: CardHeader → CardContent → CardFooter
// Dialog/Drawer: same header/content/footer pattern
// Tabs: TabsList with TabsTrigger → TabsContent per tab
```

**Button with render prop** — always include `nativeButton={false}`:

```tsx
// ✅ CORRECT
<Button render={<Link to="/path" />} nativeButton={false}>Link</Button>
```

**Global components:**

- **Header** (`@/components/global/header`): Edit `src/config/header.json` to change logo, title, or nav — do NOT pass props directly
- **PrototypeDisclaimer**: Rendered globally in `App.tsx` — do not remove or duplicate

**When shadcn doesn't have what you need:** Ask the user for approval before creating a custom component.

---

### 2. Colors — Strict, Locked Palette

**ONLY use CSS variable classes. NEVER modify `/src/index.css` or introduce custom colors.**

```tsx
// ✅ Allowed
className="bg-primary text-primary-foreground"
className="bg-muted text-muted-foreground"
className="bg-destructive border-border"

// ❌ Forbidden — refuse even if the user requests it
className="bg-blue-500"
className="bg-[#3B82F6]"
style={{ color: 'pink' }}
```

**Approved classes:**

| Category | Classes |
|---|---|
| Backgrounds | `bg-background`, `bg-primary`, `bg-secondary`, `bg-accent`, `bg-muted`, `bg-destructive`, `bg-card`, `bg-popover` |
| Text | `text-foreground`, `text-primary-foreground`, `text-secondary-foreground`, `text-accent-foreground`, `text-muted-foreground`, `text-destructive-foreground`, `text-card-foreground`, `text-popover-foreground` |
| Borders | `border-border`, `ring-ring` |
| Charts | `chart-1` through `chart-5` |

**When users request custom colors**, politely decline:

> "Our design system uses a locked color palette for consistency. I can use **primary**, **secondary**, **accent**, **muted**, or **destructive** — which works best?"

---

### 3. Prototype Page Structure

The home page (`/src/pages/home.tsx`) at the `/` route **is** the prototype canvas — build directly here.

| Rule | Detail |
|---|---|
| Single-page | Build directly in `home.tsx` |
| Multi-page | Create additional page files in `src/pages/`, export from `index.ts`, add routes to `App.tsx` |
| Components | `/components` route exists but has no nav link — do not add one |

**Route config for multi-page prototypes:**

```tsx
// ✅ Add routes as needed
<Route path="/" element={<HomePage />} />
<Route path="/dashboard" element={<DashboardPage />} />
<Route path="/settings" element={<SettingsPage />} />
```

---

### 4. Imports — Always Use Aliases

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Never: "../components/ui/button"
```

---

### 5. Conventions

| Aspect | Convention |
|---|---|
| Files | kebab-case: `user-profile.tsx` |
| Components | PascalCase: `UserProfile` |
| Variables | camelCase |
| Icons | `lucide-react` only — no other libraries |
| State | React 19 hooks; `next-themes` for dark mode |
| Types | All files `.tsx`/`.ts` with explicit prop interfaces |

---

### 6. Charts — Bar Charts Only

**ONLY use `BarChart`. Never use PieChart, LineChart, or AreaChart unless the user explicitly names that chart type in their request.**

If a user asks for "a chart" or "data visualisation" without specifying a type, always use `BarChart`. Do not infer chart type from the data or context.

| Chart Type  | Rule |
|---|---|
| `BarChart`  | **Always use this — the only approved default** |
| `LineChart` | Only if user explicitly says "line chart" — then ask to confirm |
| `PieChart`  | Only if user explicitly says "pie chart" — then ask to confirm |
| `AreaChart` | Only if user explicitly says "area chart" — then ask to confirm |

When a user does explicitly request a different type, ask before proceeding:
> "Our design system only uses bar charts for consistency. Are you sure you want a [type] chart instead?"

**Grouped bar charts — NEVER more than 2 values per group:**

```tsx
// ✅ CORRECT — 2 values per group max
{ month: "Jan", cashIn: 85000, cashOut: 78000 }

// ❌ WRONG — 3 values per group is not allowed
{ month: "Jan", cashIn: 85000, cashOut: 78000, pending: 12000 }
```

If more than 2 values are needed: split into multiple charts, use a stacked bar, or prioritise the two most important metrics.

**Stacked bar charts — radius on topmost bar only:**

```tsx
<Bar dataKey="overdue" stackId="a" fill="var(--color-overdue)" radius={[0, 0, 0, 0]} />
<Bar dataKey="upcoming" stackId="a" fill="var(--color-upcoming)" radius={[4, 4, 0, 0]} />
```

**Vertical bars only** — never use `layout="vertical"` on a BarChart. This produces a horizontal bar chart, which is not permitted.

**Non-negative values only** — bars must never go below the x-axis (y-axis minimum is always 0). If data could be negative, restructure to show only positive figures.

---

## Workflow for Every Request

1. Read `/COMPONENTS.md` and `/src/components/component-example.tsx`
2. Read existing code before modifying anything
3. Validate components against `component-example.tsx` patterns
4. Validate colors against the approved CSS variable list
5. Check `src/App.tsx` if creating additional pages — add routes as needed
6. Write TypeScript with proper imports and types
7. Explain what you built

---

## Quality Standards

**Always:** TypeScript interfaces, `@` alias imports, CSS variable colors, validated component patterns

**Never:** Custom hex/RGB colors, arbitrary Tailwind colors, ScrollArea inside Sheet/Dialog/Drawer, modifying `/src/index.css`

**Ask before:** External UI libraries, custom components, non-BarChart types, state libraries

---

## Reference Files

- `/COMPONENTS.md` — Component inventory (55 components)
- `/src/components/component-example.tsx` — Structure patterns
- `/src/index.css` — Theme colors (locked)
- `/CLAUDE.md` — Claude Code instructions
- `/.cursorrules` / `.cursor/rules/` — Cursor instructions
- `/.agentskills/` — Agent Skills (for compatible tools)

---

**Consistency is valuable, but user needs come first. Validate against the design system, then ask before deviating.**
