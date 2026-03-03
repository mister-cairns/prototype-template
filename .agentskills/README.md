# Agent Skills for Secret Squirrel

This directory contains [Agent Skills](https://agentskills.io) that enforce the Secret Squirrel design system rules.

## What are Agent Skills?

Agent Skills are a standard format for giving AI agents structured capabilities and expertise. They provide procedural knowledge that agents can load on demand to perform tasks more accurately and consistently.

## Available Skills

| Skill | Description | When to Use |
|-------|-------------|-------------|
| **`initialize-project`** | Mandatory pre-flight check that loads all project rules, design system constraints, and component patterns | **FIRST** - Before any work begins |
| **`validate-component`** | Validates that a component exists in shadcn/ui and returns the correct structure pattern | Before implementing any UI component |
| **`validate-colors`** | Validates color usage against the strict approved CSS variable palette | Before implementing any styling with colors |
| **`validate-prototype-route`** | Validates prototype page structure and routing conventions | Before creating or modifying prototype pages |

## How Skills Enforce Rules

Each skill encapsulates specific validation logic:

### `initialize-project`
- Reads `.claude.md` or `.cursorrules`
- Loads component inventory from `/COMPONENTS.md`
- Reviews component structure patterns from `/src/components/component-example.tsx`
- Validates prototype structure
- Returns summary of key constraints

### `validate-component`
- Checks if component exists in shadcn/ui library
- Returns correct usage pattern from `component-example.tsx`
- Flags if component doesn't exist (prompts to ask user for custom component approval)
- Warns about anti-patterns (e.g., adding ScrollArea inside Sheet)

### `validate-colors`
- Enforces whitelist of approved CSS variable classes
- Rejects hex colors, RGB, named colors, arbitrary Tailwind colors
- Provides polite decline template when users request custom colors
- Offers theme alternatives (primary, secondary, accent, muted, destructive)

### `validate-prototype-route`
- Ensures all prototypes start in `/src/pages/prototype.tsx`
- Validates file naming conventions (`prototype-*.tsx`)
- Checks route configuration in `App.tsx`
- Prevents building prototype content in `home.tsx`

## What Was Removed from Rules Files

To avoid duplication, the following content was **removed** from `.claude.md` and `.cursorrules` (now handled by skills):

### Component Structure Patterns → `validate-component` skill
- Detailed Sheet, Card, Dialog, Drawer, Tabs structure patterns
- Examples of correct/incorrect component usage
- Anti-patterns warnings

### Color Validation → `validate-colors` skill
- Exhaustive list of what NOT to do (hex, RGB, named colors)
- Detailed color class whitelist
- Examples of correct/incorrect color usage
- User decline templates

### Prototype Routing → `validate-prototype-route` skill
- Detailed routing instructions
- File naming conventions
- Multi-page prototype setup steps
- Common mistakes and corrections

### What Stayed in Rules Files
- High-level philosophy and approach
- Import conventions (simple pattern)
- TypeScript requirements (enforced by tooling)
- Chart defaults and grouping rules
- General workflow and communication style
- Non-technical user guidance

## File Format

Each skill is a directory containing a `SKILL.md` file with:

1. **YAML Frontmatter** (metadata):
   ```yaml
   ---
   name: skill-name
   description: What the skill does and when to use it
   metadata:
     author: secret-squirrel
     version: "1.0"
   allowed-tools: Read Grep
   ---
   ```

2. **Markdown Body** (instructions):
   - Step-by-step instructions
   - Examples and patterns
   - Output format
   - Common mistakes to avoid

## Benefits of Using Skills

1. **Enforcement**: Skills provide executable validation, not just prose guidelines
2. **Discoverability**: Skills are registered and easier for AIs to find than buried rules
3. **Reusability**: Same skill can be used across different AI tools that support the format
4. **Maintainability**: Update logic in one place instead of multiple rule files
5. **Progressive Disclosure**: Load rules only when needed, keeping context efficient

## Supported AI Tools

Agent Skills are supported by:
- Claude Code
- Cursor
- GitHub Copilot
- VS Code extensions
- And [many more](https://agentskills.io/home)

## Validation

To validate your skills (requires [skills-ref](https://github.com/agentskills/agentskills/tree/main/skills-ref)):

```bash
skills-ref validate ./.agentskills/initialize-project
skills-ref validate ./.agentskills/validate-component
skills-ref validate ./.agentskills/validate-colors
skills-ref validate ./.agentskills/validate-prototype-route
```

## Learn More

- [Agent Skills Website](https://agentskills.io)
- [Specification](https://agentskills.io/specification)
- [Example Skills](https://github.com/anthropics/skills)
- [Integration Guide](https://agentskills.io/integrate-skills)
