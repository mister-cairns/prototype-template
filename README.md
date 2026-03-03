# Prototype Template

A boilerplate for quickly building AI-assisted UI prototypes. Built with React 19, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui.

## Getting started

**1. Clone the repo**

```bash
git clone <repo-url>
cd prototype-template
```

**2. Install dependencies**

Works with any package manager:

```bash
pnpm install   # or: npm install / yarn install / bun install
```

**3. Start the dev server**

```bash
pnpm dev       # or: npm run dev / yarn dev / bun dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Building your prototype

Open the project in Claude Code, Cursor, VS Code, or any AI-enabled editor and describe what you want to build. The AI will use the project rules and design system to build it directly on the home page.

The project includes rules files for all major AI tools:

| Tool | File |
|---|---|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/project-rules.mdc` + `.cursorrules` |
| GitHub Copilot / VS Code | `.github/copilot-instructions.md` |
| OpenAI Codex / others | `AGENTS.md` |

## Project structure

```
src/
├── pages/
│   ├── home.tsx          # Your prototype lives here
│   └── components.tsx    # shadcn/ui component kitchen sink
├── components/
│   ├── ui/               # shadcn/ui components
│   └── global/           # Shared components (Header, PrototypeDisclaimer)
├── config/
│   └── header.json       # Header title and nav config
└── index.css             # Theme and color system (do not modify)
```

## Commands

```bash
pnpm dev       # Start development server
pnpm build     # Type-check and build for production
pnpm lint      # Run ESLint
pnpm preview   # Preview production build locally
```

## Design system

- **Components**: 55 shadcn/ui components — see `/components` in the browser for the full list
- **Colors**: Locked CSS variable palette — the AI will not introduce custom colours
- **Icons**: lucide-react by default
- **Charts**: BarChart by default
