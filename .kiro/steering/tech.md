# Technology Stack & Build System

## Framework & Runtime

- **Framework**: TanStack Start (full-stack React framework)
- **React Version**: 19.2.0
- **TypeScript**: 5.8.3 (strict mode enabled)
- **Runtime**: Node.js (ES2022 target)
- **Module System**: ESM (type: "module")

## Build & Development

- **Build Tool**: Vite 7.3.1
- **Dev Server**: `npm run dev` (Vite dev server)
- **Production Build**: `npm run build` (outputs to dist/)
- **Preview**: `npm run preview` (preview production build locally)
- **Package Manager**: Bun (bun.lock file present)

### Common Commands

```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Styling & UI

- **CSS Framework**: Tailwind CSS 4.2.1 with Vite plugin
- **Component Library**: Radix UI (comprehensive headless components)
- **UI Components**: shadcn/ui-style components in `src/components/ui/`
- **Icons**: Lucide React 0.575.0
- **Animations**: Embla Carousel, Recharts, tw-animate-css

## State Management & Data

- **Routing**: TanStack Router 1.168.25 (file-based routing)
- **Data Fetching**: TanStack React Query 5.83.0
- **Form Handling**: React Hook Form 7.71.2 with Zod validation
- **Validation**: Zod 3.24.2 (schema validation)

## Code Quality

- **Linter**: ESLint 9.32.0 with TypeScript support
- **Formatter**: Prettier 3.7.3
- **Prettier Config**: 100 char line width, double quotes, trailing commas

### Linting Rules

- React Hooks rules enforced
- React Refresh warnings for component exports
- No `server-only` imports (use `*.server.ts` naming instead)
- TypeScript strict mode enabled
- Unused variables/parameters allowed (noUnusedLocals/noUnusedParameters: false)

## Deployment

- **Hosting**: Netlify (netlify.toml config present)
- **Cloudflare Integration**: @cloudflare/vite-plugin for edge functions

## Path Aliases

- `@/*` → `./src/*` (use `@/` prefix for imports)

## Key Dependencies

- **UI**: @radix-ui/*, lucide-react, embla-carousel-react, recharts
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Utilities**: clsx, tailwind-merge, date-fns, class-variance-authority
- **Notifications**: sonner (toast notifications)
- **Accessibility**: Radix UI components (ARIA compliant)

## Development Notes

- Strict TypeScript checking enabled
- No side effects in modules (sideEffects: false)
- Path resolution uses Bundler mode
- Vite config managed by @lovable.dev/vite-tanstack-config
