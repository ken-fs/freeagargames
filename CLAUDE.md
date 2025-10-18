# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Free Agar Games is a modern, SEO-optimized website for playing Agar.io-style games, built with Next.js 15 App Router, TypeScript, and Tailwind CSS 4. The project is configured for the **ken-fs** GitHub account.

## Development Commands

### Package Management (pnpm required)

```bash
pnpm install                                    # Install dependencies
pnpm add <package>                              # Add dependency
pnpm add -D <package>                           # Add dev dependency
```

### Development Workflow

```bash
pnpm dev                                        # Start dev server with Turbopack (http://localhost:3000)
pnpm build                                      # Production build with Turbopack
pnpm start                                      # Start production server
pnpm lint                                       # Run ESLint on all files
pnpm type-check                                 # TypeScript type checking without emit
```

### Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add <component-name>     # Add single component
pnpm dlx shadcn@latest add button card dialog   # Add multiple components
```

## Architecture & Project Structure

### Technology Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS 4 with CSS variables
- **UI Components**: shadcn/ui (New York style, RSC-enabled)
- **Utilities**: `clsx` + `tailwind-merge` for className management
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

### Directory Structure

```
/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with SEO metadata, fonts
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global Tailwind CSS + custom CSS
├── components/         # React components
│   └── ui/            # shadcn/ui components (auto-generated)
├── lib/               # Utility functions
│   └── utils.ts       # cn() helper for merging Tailwind classes
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── constants/         # Application constants
└── public/            # Static assets (SVGs, images)
```

### Path Aliases (via tsconfig.json)

```typescript
@/*           // Maps to root directory (e.g., @/components, @/lib/utils)
```

**Note**: The `components.json` defines additional aliases for shadcn/ui, but TypeScript uses the above mapping.

### Key Configuration Files

- **components.json**: shadcn/ui configuration (New York style, `baseColor: neutral`)
- **tsconfig.json**: TypeScript config with path aliases, strict mode
- **eslint.config.mjs**: ESLint config extending `next/core-web-vitals` and `next/typescript`
- **next.config.ts**: Next.js configuration (currently minimal)
- **.env.example**: Template for environment variables (SEO verification codes, analytics)

## Architecture Patterns

### Component Development

- Use React Server Components (RSC) by default for all components in `app/` directory
- Add `"use client"` directive only when needed (state, effects, event handlers)
- Functional components with TypeScript interfaces for props
- Use `cn()` utility from `@/lib/utils` for conditional Tailwind classes

Example pattern:
```typescript
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
  // ... other props
}

export function Component({ className, ...props }: ComponentProps) {
  return <div className={cn("base-classes", className)} {...props} />
}
```

### SEO Configuration

- Root metadata is in `app/layout.tsx` with comprehensive SEO setup:
  - OpenGraph and Twitter cards configured
  - Robots meta with Google-specific directives
  - Template-based title system: `%s | Free Agar Games`
  - US market targeting (`locale: "en_US"`)

- **Google verification code** needs to be updated in `app/layout.tsx:59`

### Styling Approach

- Tailwind CSS 4 with CSS variables (see `app/globals.css` for theme variables)
- Use `cn()` utility to merge conditional classes
- shadcn/ui components already use this pattern
- PostCSS configured via `postcss.config.mjs`

### Type Safety

- Strict TypeScript mode enabled
- All components should have proper type definitions
- Use `type` for unions/primitives, `interface` for object shapes
- Avoid `any` - use `unknown` or specific types

## Git Configuration (ken-fs Account)

This repository belongs to the **ken-fs** GitHub organization. When working with git:

```bash
# Remote URL should use github-kenfs SSH alias
git remote -v
# Should show: git@github-kenfs:ken-fs/freeagargames.git

# Set local git config (if not already set)
git config user.name "ken-fs"
git config user.email "493129720ljw@gmail.com"

# Verify SSH authentication
ssh -T git@github-kenfs
# Should show: Hi ken-fs! You've successfully authenticated...
```

**Important**: This project uses SSH authentication via the `github-kenfs` host alias configured in `~/.ssh/config`. Always use `git@github-kenfs:ken-fs/repo.git` format for remote URLs.

## Environment Variables

Copy `.env.example` to `.env.local` before development:

```bash
cp .env.example .env.local
```

Key environment variables:
- `NEXT_PUBLIC_APP_URL`: Application URL (default: `http://localhost:3000`)
- `NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE`: Update in both `.env.local` and `app/layout.tsx`
- Analytics variables (GA, GTM) are optional and commented out

## Development Notes

### Turbopack

This project uses Turbopack (Next.js's faster bundler) in both dev and build scripts. Be aware:
- Faster hot reload than webpack
- Different bundling behavior than traditional webpack setup

### shadcn/ui Integration

- Components auto-install to `components/ui/`
- Configuration uses "New York" style with neutral base color
- RSC (React Server Components) enabled by default
- CSS variables mode enabled for theming

### Next.js 15 App Router

- All routes are file-based in `app/` directory
- Server Components by default (no `"use client"` needed unless using state/effects)
- `layout.tsx` wraps all pages with shared UI and metadata
- Uses React 19 (check compatibility when adding libraries)

## Deployment

Optimized for Vercel deployment (see README.md for deployment button). Can also deploy to:
- Netlify
- Cloudflare Pages
- AWS Amplify

Ensure environment variables are configured in deployment platform.
