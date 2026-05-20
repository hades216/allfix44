# Project Structure & Organization

## Directory Layout

```
allfix-maintenance/
├── src/
│   ├── assets/                 # Static assets
│   │   ├── catalog/           # Product/service images
│   │   ├── services/          # Service category images
│   │   │   ├── ac/            # AC service images
│   │   │   ├── home/          # Home services subcategories
│   │   │   │   ├── appliances/
│   │   │   │   ├── carpenter/
│   │   │   │   ├── electrician/
│   │   │   │   ├── geyser/
│   │   │   │   ├── handyman/
│   │   │   │   ├── painter/
│   │   │   │   ├── plumber/
│   │   │   │   └── water-tank/
│   │   │   └── [other categories]/
│   │   └── logo.png
│   ├── components/            # React components
│   │   ├── site/             # Site-specific components
│   │   │   ├── cart/         # Cart functionality
│   │   │   │   ├── CartContext.tsx
│   │   │   │   ├── CartDrawer.tsx
│   │   │   │   ├── MobileCartBar.tsx
│   │   │   │   └── catalog.ts
│   │   │   ├── About.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── FloatingCTA.tsx
│   │   │   └── [other site components]
│   │   └── ui/               # Reusable UI components (shadcn/ui style)
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       └── [other UI components]
│   ├── hooks/                # Custom React hooks
│   │   └── use-mobile.tsx    # Mobile detection hook
│   ├── lib/                  # Utility functions & helpers
│   │   ├── utils.ts          # General utilities (cn, etc.)
│   │   ├── error-capture.ts  # Error handling
│   │   └── error-page.ts     # Error page utilities
│   ├── routes/               # TanStack Router file-based routes
│   │   ├── __root.tsx        # Root layout & shell
│   │   ├── index.tsx         # Home page (/)
│   │   ├── categories.$id.tsx # Category detail page
│   │   ├── home-services.tsx # Home services page
│   │   └── contact.tsx       # Contact page
│   ├── router.tsx            # Router configuration
│   ├── routeTree.gen.ts      # Auto-generated route tree (do not edit)
│   ├── server.ts             # Server-side code
│   ├── start.ts              # Application entry point
│   └── styles.css            # Global styles (Tailwind)
├── .kiro/                    # Kiro configuration
│   └── steering/             # Steering documents
├── .lovable/                 # Lovable template config
├── public/                   # Static files (if any)
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.js          # ESLint configuration
├── .prettierrc                # Prettier configuration
├── package.json              # Dependencies & scripts
├── netlify.toml              # Netlify deployment config
└── bunfig.toml               # Bun configuration

```

## Key Architectural Patterns

### File-Based Routing (TanStack Router)

- Routes are defined in `src/routes/` directory
- File naming convention: `[name].$param.tsx` for dynamic routes
- `__root.tsx` is the root layout component
- `routeTree.gen.ts` is auto-generated (do not edit manually)

### Component Organization

- **UI Components** (`src/components/ui/`): Reusable, unstyled Radix UI-based components
- **Site Components** (`src/components/site/`): Domain-specific components for AllFix
- **Cart System**: Centralized in `src/components/site/cart/` with React Context

### State Management

- **Global State**: React Context (CartContext for shopping cart)
- **Server State**: TanStack React Query for data fetching
- **Form State**: React Hook Form with Zod validation

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Modules**: Not used; Tailwind classes directly in JSX
- **Global Styles**: `src/styles.css` for global Tailwind directives
- **Component Styling**: Inline Tailwind classes with `cn()` utility for conditional classes

### Data Flow

1. **Catalog Data**: Defined in `src/components/site/cart/catalog.ts`
2. **Service Selection**: Added to cart via CartContext
3. **Cart Management**: Persisted in CartContext, displayed in CartDrawer
4. **Mobile Optimization**: MobileCartBar for mobile devices

## Naming Conventions

- **Components**: PascalCase (e.g., `CartDrawer.tsx`, `FloatingCTA.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `use-mobile.tsx`)
- **Utilities**: camelCase (e.g., `error-capture.ts`)
- **Routes**: kebab-case with `$` for dynamic segments (e.g., `categories.$id.tsx`)
- **CSS Classes**: Tailwind utility classes, no custom class names

## Import Paths

- Use `@/` alias for all imports from `src/`
- Example: `import { CartProvider } from "@/components/site/cart/CartContext"`
- Avoid relative imports; always use the `@/` alias

## Component Patterns

### Layout Components

- Root layout in `__root.tsx` with navigation, footer, and outlet
- Responsive design with mobile-first approach
- Sticky navigation with cart button

### Page Components

- Each route file exports a `Route` object with `createFileRoute()`
- Head metadata defined in route component
- Component exported as default or named `Home`, `Contact`, etc.

### Context Providers

- CartProvider wraps the entire app in RootComponent
- QueryClientProvider for React Query
- Toaster for notifications

## Best Practices

1. **Type Safety**: Use TypeScript for all files; avoid `any` type
2. **Component Composition**: Break down large components into smaller, reusable pieces
3. **Accessibility**: Use Radix UI components for built-in ARIA support
4. **Performance**: Use React.lazy and Suspense for code splitting where needed
5. **Error Handling**: Implement error boundaries and error pages
6. **Mobile First**: Design for mobile, then enhance for larger screens
7. **Responsive Images**: Use `loading="lazy"` for images below the fold
