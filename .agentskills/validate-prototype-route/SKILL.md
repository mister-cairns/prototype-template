---
name: validate-prototype-route
description: Validates prototype page structure and routing conventions. Ensures all prototype content starts in prototype.tsx with proper sub-route naming. Use before creating or modifying prototype pages.
metadata:
  author: secret-squirrel
  version: "1.0"
allowed-tools: Read Glob
---

# Validate Prototype Route

This skill ensures proper prototype page structure and routing conventions.

## When to Use This Skill

Invoke this skill:

- Before creating a new prototype page
- When a user asks to build/create their prototype
- Before adding multi-page navigation to a prototype
- When you're unsure where to place prototype content

## The Prototype Structure Rules

### Core Principle

**ALL prototype content MUST start in `/src/pages/prototype.tsx`**

This file renders at the `/prototype` route, which is where prototypes live.

### Single-Page Prototypes

For simple, single-page prototypes:

- Build everything directly in `/src/pages/prototype.tsx`
- Extract reusable components to separate files as needed
- No routing changes required

### Multi-Page Prototypes

For prototypes with multiple pages:

1. **Main page**: `/src/pages/prototype.tsx` (entry point at `/prototype`)
2. **Additional pages**: Create files with `prototype-` prefix:
   - `/src/pages/prototype-details.tsx`
   - `/src/pages/prototype-settings.tsx`
   - `/src/pages/prototype-dashboard.tsx`
3. **Export pages**: Add to `/src/pages/index.ts`
4. **Add routes**: Update `/src/App.tsx` with nested routes under `/prototype`:
   ```tsx
   <Route path="/prototype" element={<PrototypePage />} />
   <Route path="/prototype/details" element={<PrototypeDetailsPage />} />
   <Route path="/prototype/settings" element={<PrototypeSettingsPage />} />
   ```
5. **Navigate**: Use `<Link to="/prototype/details">` for navigation

## Critical Rules

### ✅ DO

- Start all prototypes in `/src/pages/prototype.tsx`
- Use `prototype-` prefix for additional pages (e.g., `prototype-details.tsx`)
- Nest all prototype routes under `/prototype/*` in App.tsx
- Use React Router's `<Link>` component for navigation between pages
- **Add a link card to the home page** (`/src/pages/home.tsx`) when creating a new prototype page, using the existing card pattern with icon, title, description, and button

### ❌ NEVER

- Build prototype content directly in `/src/pages/home.tsx` (homepage is for navigation only)
- Replace the homepage with prototype content
- Modify the "Demo" card link on the homepage (it already links to `/prototype`)
- Create prototype pages without the `prototype-` prefix
- Use routes outside the `/prototype/*` namespace for prototype pages

## Instructions

### Step 1: Determine Prototype Type

Ask yourself:

- Is this a single-page prototype? → Use `prototype.tsx` only
- Does this need multiple pages? → Create sub-routes

### Step 2: Verify Entry Point

Confirm that `/src/pages/prototype.tsx` exists and will be the main entry point.

If creating a new prototype:

- Check if `prototype.tsx` already has content
- If it does, ask the user if you should overwrite or extend it

### Step 3: Validate File Naming

For multi-page prototypes, ensure:

- All additional pages use `prototype-*` naming convention
- File names are kebab-case (e.g., `prototype-user-profile.tsx`)

### Step 4: Check Route Configuration

For multi-page prototypes:

1. Read `/src/App.tsx`
2. Verify routes are nested under `/prototype/*`
3. Ensure pages are exported from `/src/pages/index.ts`

### Step 5: Confirm Homepage Untouched

Verify that:

- `/src/pages/home.tsx` remains a navigation page
- The "Demo" card still links to `/prototype`
- No prototype content has been added to the homepage

### Step 6: Add Home Page Link Card

When creating a new prototype page:

1. Read `/src/pages/home.tsx` to understand the existing card pattern
2. Add a new Card component with:
   - Icon from lucide-react
   - Title describing the prototype
   - Description of what the prototype does
   - Button linking to the new route
3. Follow the existing grid layout pattern

## Output Format

### For Single-Page Prototype

```
✅ Prototype structure validated

Single-page prototype:
- Entry point: /src/pages/prototype.tsx
- Route: /prototype
- Homepage "Demo" card links to this route

Actions required:
1. Implement prototype in prototype.tsx
2. Add a link card to /src/pages/home.tsx (if not already present)
```

### For Multi-Page Prototype

```
✅ Prototype structure validated

Multi-page prototype:
- Main page: /src/pages/prototype.tsx → /prototype
- Details page: /src/pages/prototype-details.tsx → /prototype/details
- Settings page: /src/pages/prototype-settings.tsx → /prototype/settings

Routes to add in App.tsx:
<Route path="/prototype" element={<PrototypePage />} />
<Route path="/prototype/details" element={<PrototypeDetailsPage />} />
<Route path="/prototype/settings" element={<PrototypeSettingsPage />} />

Actions required:
1. Implement prototype pages
2. Add routes to App.tsx
3. Add a link card to /src/pages/home.tsx for each new prototype
```

### When Structure Is Invalid

```
❌ Prototype structure validation failed

Issues found:
- Prototype content found in home.tsx (should be in prototype.tsx)
- Missing prototype- prefix on details.tsx
- Routes not nested under /prototype

Corrections needed:
1. Move content from home.tsx to prototype.tsx
2. Rename details.tsx to prototype-details.tsx
3. Update routes to /prototype/* pattern
```

## Common Mistakes to Avoid

### Mistake 1: Building in home.tsx

**WRONG:**

```tsx
// ❌ In /src/pages/home.tsx
export function HomePage() {
  return (
    <div>
      <h1>My Prototype Dashboard</h1>
      {/* Prototype content here - WRONG LOCATION */}
    </div>
  );
}
```

**CORRECT:**

```tsx
// ✅ In /src/pages/home.tsx (unchanged)
export function HomePage() {
  return (
    <div className="container py-8">
      <h1>Secret Squirrel</h1>
      <Card>
        <Link to="/prototype">
          <CardTitle>Demo</CardTitle>
        </Link>
      </Card>
    </div>
  );
}

// ✅ In /src/pages/prototype.tsx (prototype content)
export function PrototypePage() {
  return (
    <div>
      <h1>My Prototype Dashboard</h1>
      {/* Prototype content here - CORRECT */}
    </div>
  );
}
```

### Mistake 2: Incorrect File Naming

**WRONG:**

```
/src/pages/
├── prototype.tsx ✅
├── details.tsx ❌ (missing prefix)
├── settings.tsx ❌ (missing prefix)
```

**CORRECT:**

```
/src/pages/
├── prototype.tsx ✅
├── prototype-details.tsx ✅
├── prototype-settings.tsx ✅
```

### Mistake 3: Routes Outside /prototype

**WRONG:**

```tsx
// ❌ In App.tsx
<Route path="/prototype" element={<PrototypePage />} />
<Route path="/details" element={<DetailsPage />} /> {/* Not nested */}
<Route path="/settings" element={<SettingsPage />} /> {/* Not nested */}
```

**CORRECT:**

```tsx
// ✅ In App.tsx
<Route path="/prototype" element={<PrototypePage />} />
<Route path="/prototype/details" element={<PrototypeDetailsPage />} />
<Route path="/prototype/settings" element={<PrototypeSettingsPage />} />
```

## Example: Creating a Multi-Page Prototype

User request: "Create a prototype with a dashboard, user profile page, and settings page"

### Step-by-step implementation:

1. **Main page** (`/src/pages/prototype.tsx`):

   ```tsx
   export function PrototypePage() {
     return (
       <div>
         <h1>Dashboard</h1>
         <nav>
           <Link to="/prototype/profile">Profile</Link>
           <Link to="/prototype/settings">Settings</Link>
         </nav>
         {/* Dashboard content */}
       </div>
     );
   }
   ```

2. **Profile page** (`/src/pages/prototype-profile.tsx`):

   ```tsx
   export function PrototypeProfilePage() {
     return (
       <div>
         <h1>User Profile</h1>
         <Link to="/prototype">Back to Dashboard</Link>
         {/* Profile content */}
       </div>
     );
   }
   ```

3. **Settings page** (`/src/pages/prototype-settings.tsx`):

   ```tsx
   export function PrototypeSettingsPage() {
     return (
       <div>
         <h1>Settings</h1>
         <Link to="/prototype">Back to Dashboard</Link>
         {/* Settings content */}
       </div>
     );
   }
   ```

4. **Export pages** (`/src/pages/index.ts`):

   ```tsx
   export { PrototypePage } from "./prototype";
   export { PrototypeProfilePage } from "./prototype-profile";
   export { PrototypeSettingsPage } from "./prototype-settings";
   ```

5. **Add routes** (`/src/App.tsx`):
   ```tsx
   <Route path="/prototype" element={<PrototypePage />} />
   <Route path="/prototype/profile" element={<PrototypeProfilePage />} />
   <Route path="/prototype/settings" element={<PrototypeSettingsPage />} />
   ```

## Homepage Structure

The homepage (`/src/pages/home.tsx`) should remain a simple navigation page:

```tsx
export function HomePage() {
  return (
    <div className="container py-8">
      <h1>Project Name</h1>
      <div className="grid gap-4">
        <Card>
          <Link to="/prototype">
            <CardHeader>
              <CardTitle>Demo</CardTitle>
              <CardDescription>View the prototype</CardDescription>
            </CardHeader>
          </Link>
        </Card>
        {/* Other navigation cards */}
      </div>
    </div>
  );
}
```

**Never modify the "Demo" card link** - it should always point to `/prototype`.
