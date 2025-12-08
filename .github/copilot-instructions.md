# Copilot Instructions for soldunov.dev

## Project Overview
Next.js 16 personal portfolio using App Router, TypeScript (strict mode), Tailwind CSS v4, and Jotai for state management. Bun is the package manager.

## Architecture & Structure

### Component Organization
- **Sections** (`@/components/sections/`): Page-level sections (hero, projects, experience). Each section is self-contained and used directly in pages.
- **Layout** (`@/components/layout/`): Shared wrappers (`Container`, `Html`). `Html` is a client component wrapping `<html>` to inject Jotai theme state via `data-theme` attribute.
- **Elements** (`@/components/elements/`): Reusable building blocks with built-in animation patterns (e.g., `SlideInParagraph`, `SlideInDiv`).
- **UI** (`@/components/ui/`): Interactive components like `AvatarInteraction` (3D tilt effect) and `ProjectCard`.

### State Management Pattern
- Use **Jotai** for global state; define atoms in `@/lib/state.ts`
- Example: `themeAtom` uses `atomWithStorage` to persist light/dark theme preference
- Access in client components via `useAtomValue`, `useSetAtom`, or `useAtom`
- Wrap app with `<Provider>` in root layout (already configured)

### Animation Conventions
- Use **Motion** (from `motion/react`) for all animations
- Standard pattern: `initial` → `whileInView` with `viewport={{ once: true }}`
- Reuse existing animation components (`SlideInParagraph`, `SlideInDiv`) before creating new ones
- For interactive animations, see `AvatarInteraction` for spring-based 3D tilt pattern using `useSpring` and `useMotionTemplate`

### Styling Approach
- **Tailwind v4** with custom utilities in `@/styles/globals.css`
- Theme variables: `--background`, `--foreground` toggle via `data-theme` attribute
- Color palette: `azure-blue`, `strawberry-red`, `malachite-green` (defined in CSS)
- Custom utilities: `leading-xtight: 1.2`, `text-4.5xl: 2.625rem`
- Always use `cn()` helper from `@/lib/utils` to merge Tailwind classes (handles conflicts via `tailwind-merge`)
- Grain background texture applied via `--bg-image` CSS var in root layout (sourced from `@/assets/grain.png`)

### Typography & Fonts
- **SF Pro Display** (sans) and **SF Mono** (monospace) loaded via `next/font/local` in `@/fonts/index.ts`
- Font variables already injected in root layout via `className`
- Access via Tailwind: `font-sans`, `font-mono`

### Path Aliasing
- Use `@/*` to import from `src/*` (configured in `tsconfig.json`)
- Example: `import { cn } from '@/lib/utils'`

## Developer Workflows

### Commands
```bash
bun install          # Install dependencies (bun.lock is source of truth)
bun dev             # Start dev server on localhost:3000
bun run build       # Production build
bun run lint        # Biome linting
bun run format      # Biome auto-format with --write
```

### Code Quality Standards
- **Biome** for linting/formatting (not ESLint/Prettier)
- Format: tabs for indentation, single quotes for JS/JSX
- Auto-sort Tailwind classes via `useSortedClasses` rule (works with `cn`, `clsx`)
- Run `bun run lint` before committing
- Organize imports automatically (enabled in Biome config)

### Component Guidelines
- **Prefer server components** unless you need client-side interactivity or state
- Add `'use client'` directive only when necessary (hooks, event handlers, Jotai atoms)
- Keep components small and composable
- New page sections go in `@/components/sections/`
- Extract reusable patterns to `@/components/elements/` or `@/components/ui/`

### TypeScript Conventions
- Strict mode enabled; handle nulls/undefined explicitly
- Prefer `type` over `interface` for props (matches existing code)
- Use `React.CSSProperties` for inline styles with CSS variables (see layout.tsx example)
- No `any` types; use proper typing or `unknown`

## Key Files & Patterns

### Root Layout (`src/app/layout.tsx`)
- Wraps app in Jotai `Provider`
- Custom `Html` component injects theme via `data-theme`
- Grain background applied via inline style with CSS var
- Font variables applied to `body` via `className`

### Theme System
- Light/dark mode controlled by `themeAtom` in `@/lib/state.ts`
- Theme preference persisted to localStorage
- CSS variables switch in `@/styles/globals.css` based on `data-theme` attribute
- Falls back to `prefers-color-scheme: dark` if no preference set

### Container Pattern
- Use `Container` component for consistent page-level padding/max-width
- Default max-width: `7xl` (1280px), horizontally centered
- Responsive padding: `px-6` (mobile) → `px-8` (tablet) → `px-12` (desktop)

### Animation Pattern Example
```tsx
'use client';
import { motion } from 'motion/react';

<motion.div
  initial={{ translateY: 20, opacity: 0 }}
  whileInView={{ translateY: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  {children}
</motion.div>
```

## Additional Notes
- No environment variables currently configured; document any additions in README.md
- Grain texture (`@/assets/grain.png`) is a key visual element—preserve unless intentionally changing design
- Next.js 16 and React 19.2 in use; prefer latest patterns (async server components, etc.)
- Avoid introducing new tooling (Prettier, ESLint, etc.) without discussion—Biome handles all linting/formatting
