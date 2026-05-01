# Component Library - Project Structure

```
📦 component-library/
│
├── 📄 README.md                    # Main documentation
├── 📄 GETTING_STARTED.md           # Quick start guide
├── 📄 CONTRIBUTING.md              # Contribution guidelines
├── 📄 CHANGELOG.md                 # Version history
├── 📄 STRUCTURE.md                 # This file
│
├── 📦 packages/
│
│   ├── 🎨 design-tokens/           # Design tokens (colors, typography, spacing)
│   │   │
│   │   ├── 📄 package.json
│   │   ├── 📄 README.md
│   │   │
│   │   ├── 📁 src/
│   │   │   ├── 📄 index.ts              # Main export
│   │   │   ├── 📄 tokens.ts             # Combined tokens
│   │   │   ├── 🎨 colors.ts             # Color palette (neutral, accent, semantic)
│   │   │   ├── 📝 typography.ts         # Font scales (h1-h6, body, labels, mono)
│   │   │   └── 📏 spacing.ts            # Spacing scale (4px base unit)
│   │   │
│   │   └── 🔧 scripts/
│   │       └── 📄 sync-figma-tokens.ts  # Figma API integration script
│   │
│   └── ⚛️  ui-library/              # React components
│       │
│       ├── 📄 package.json
│       ├── 📄 README.md
│       ├── 📄 tsconfig.json
│       ├── 📄 tsconfig.node.json
│       │
│       ├── 📁 src/
│       │   ├── 📄 index.ts              # Main library export
│       │   │
│       │   ├── 🧩 components/           # React components
│       │   │   ├── 📁 Button/
│       │   │   │   ├── Button.tsx       # Button component
│       │   │   │   ├── Button.module.css # Button styles
│       │   │   │   └── index.ts
│       │   │   ├── 📁 Card/
│       │   │   │   ├── Card.tsx         # Card component
│       │   │   │   ├── Card.module.css  # Card styles
│       │   │   │   └── index.ts
│       │   │   ├── 📁 Input/
│       │   │   │   ├── Input.tsx        # Input component
│       │   │   │   ├── Input.module.css # Input styles
│       │   │   │   └── index.ts
│       │   │   └── index.ts             # All exports
│       │   │
│       │   ├── 🎣 hooks/
│       │   │   ├── 📄 useTokens.ts      # Token accessor hook
│       │   │   └── index.ts
│       │   │
│       │   └── 🎨 styles/
│       │       └── globals.css          # Global styles + CSS variables
│       │
│       ├── 📚 stories/                  # Storybook documentation
│       │   ├── 📄 Button.stories.tsx
│       │   ├── 📄 Card.stories.tsx
│       │   └── 📄 Input.stories.tsx
│       │
│       └── 📖 .storybook/               # Storybook configuration
│           ├── main.ts
│           └── preview.ts
│
├── 🔄 .github/
│   └── 📁 workflows/
│       └── publish.yml                  # GitHub Actions CI/CD
│
├── 📄 package.json                      # Workspace root config
├── 📄 .gitignore                        # Git ignore rules
├── 📄 .npmrc                            # NPM configuration
└── 📄 pnpm-workspace.yaml (optional)    # PNPM workspace (if using PNPM)
```

## File Descriptions

### Root Files
- **README.md** - Main documentation with overview and usage
- **GETTING_STARTED.md** - Quick start guide for developers
- **CONTRIBUTING.md** - Guidelines for adding new components
- **CHANGELOG.md** - Version history and release notes
- **package.json** - Workspace configuration with npm scripts
- **.gitignore** - Git ignore patterns
- **.npmrc** - NPM registry configuration

### Design Tokens Package
- **colors.ts** - Geist-inspired color palette (neutral scale + accents)
- **typography.ts** - Font scales for headings, body, labels, monospace
- **spacing.ts** - 4px-based spacing scale
- **sync-figma-tokens.ts** - Script to sync tokens from Figma API

### UI Library Package

#### Components
- **Button** - Interactive button with variants (primary, secondary, ghost, danger)
- **Card** - Content container with padding and hover effects
- **Input** - Text input with labels, errors, and validation

#### Styling
- **globals.css** - Global styles and CSS variable definitions
- **Button.module.css** - Component-scoped styles (CSS Modules)
- **Card.module.css** - Component-scoped styles
- **Input.module.css** - Component-scoped styles

#### Documentation
- **Storybook** - Interactive component showcase
- **.storybook/main.ts** - Storybook configuration
- **.storybook/preview.ts** - Storybook theme and settings
- **stories/** - Component stories for each component

## Technology Stack

```
Design System
├── Figma (design tokens source)
├── TypeScript (type safety)
└── CSS Variables + CSS Modules (styling)

Components
├── React 19
├── TypeScript
├── CSS Modules
├── Framer Motion (animations)
└── Geist Design System (inspiration)

Documentation
├── Storybook 8
└── Markdown

Publishing
├── npm registry
├── GitHub Actions (CI/CD)
└── Semantic Versioning
```

## Color Tokens

```
Neutral Scale (50-900)
├── 50: #f9f9f9
├── 100: #f3f3f3
├── 200: #e8e8e8
├── ...
└── 900: #171717

Accent Colors
├── primary: #FF6B00 (warm orange)
├── secondary: #0070F3 (vercel blue)
├── success: #0CCE6B
├── error: #FF4444
└── warning: #FFA500
```

## Typography Tokens

```
Headings (h1-h6)
├── h1: 2.5rem, 700 weight, 1.2 line-height
├── h2: 2rem, 700 weight, 1.25 line-height
├── ...
└── h6: 1rem, 600 weight, 1.5 line-height

Body Text
├── lg: 1.125rem, 400 weight
├── base: 1rem, 400 weight
├── sm: 0.875rem, 400 weight
└── xs: 0.75rem, 400 weight

Labels
├── lg: 1rem, 500 weight
├── base: 0.875rem, 500 weight
└── sm: 0.75rem, 500 weight (uppercase)

Monospace
├── base: 0.875rem
└── sm: 0.75rem
```

## Spacing Scale

```
Base Unit: 4px

0, 2px, 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px,
36px, 40px, 48px, 56px, 64px, 80px, 96px, 112px, 128px,
144px, 160px, 176px, 192px, 208px, 224px, 240px, 256px,
288px, 320px, 384px

Semantic Aliases:
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
```

## Component Props Summary

### Button
```tsx
<Button
  variant="primary" | "secondary" | "ghost" | "danger"
  size="sm" | "md" | "lg"
  loading={boolean}
  fullWidth={boolean}
  disabled={boolean}
  iconLeft={ReactNode}
  iconRight={ReactNode}
  {...HTMLButtonAttributes}
>
  {children}
</Button>
```

### Card
```tsx
<Card
  padding="sm" | "md" | "lg"
  border={boolean}
  hoverable={boolean}
  {...HTMLDivAttributes}
>
  {children}
</Card>
```

### Input
```tsx
<Input
  type="text" | "email" | "password" | ...
  size="sm" | "md" | "lg"
  label={string}
  error={string}
  helper={string}
  iconLeft={ReactNode}
  iconRight={ReactNode}
  {...HTMLInputAttributes}
/>
```

## CSS Variables Available

```css
/* Colors */
--color-primary: #ff6b00
--color-secondary: #0070f3
--color-neutral-{50-900}: grayscale
--color-background: #ffffff (or dark mode)
--color-foreground: #000000 (or dark mode)
--color-border: #e5e5e5
--color-divider: #f0f0f0

/* Typography */
--font-sans: System fonts
--font-mono: Monospace fonts

/* Spacing */
--spacing-{0-96}: 0px to 384px

/* Shadows */
--shadow-sm/md/lg/xl

/* Border Radius */
--radius-none/sm/md/lg/xl/full

/* Transitions */
--transition-fast/base/slow: 100ms/150ms/200ms
```

## NPM Scripts

```bash
npm run dev              # Start Storybook (development)
npm run build            # Build all packages
npm run build:storybook  # Build Storybook static site
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript
npm run sync-tokens      # Sync tokens from Figma
```

## Workspace Scripts (from root)

```bash
npm run dev              # Storybook
npm run build -w packages/ui-library  # Build specific package
npm run lint -w packages/*             # Lint all packages
npm run sync-tokens -w packages/design-tokens  # Sync tokens
```

## Next Components to Add

```
Layout Primitives
├── Stack (vertical flex)
├── Flex (horizontal flex)
├── Grid (CSS grid)
├── Container (centered wrapper)
└── Spacer (vertical spacing)

Form Components
├── Select
├── Checkbox
├── Radio
├── Toggle/Switch
└── Textarea

Feedback Components
├── Modal/Dialog
├── Toast/Alert
├── Tooltip
└── Badge

Data Display
├── Table
├── Avatar
├── Badge
└── List

Navigation
├── Tabs
├── Breadcrumbs
└── Pagination
```

---

This structure provides a solid foundation for a scalable component library with proper separation of concerns, type safety, and documentation.
