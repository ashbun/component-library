# Getting Started with CC Component Library

## 📦 What's Included

Your component library platform is now ready! Here's what you have:

### Design Tokens Package (`@cc-ecommerce/design-tokens`)
- **Colors**: Geist-inspired neutral scale + accent colors
- **Typography**: 6 heading levels, body text, labels, monospace
- **Spacing**: 4px-based scale
- **CSS Variables**: Global theme with dark mode support
- **Figma Integration**: Script to sync tokens from Figma

### UI Library Package (`@cc-ecommerce/ui-library`)
- **Button Component**: Primary, secondary, ghost, danger variants
- **Card Component**: Flexible container with hover effects
- **Input Component**: Text input with validation
- **Storybook**: Interactive component documentation
- **React Hooks**: `useTokens()` for accessing design values

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd /Users/abungla/claude-projects/CC/component-library
npm install
```

### 2. View Components in Storybook

```bash
npm run dev
```

Opens Storybook at `http://localhost:6006` where you can:
- See all components with variants
- View design tokens
- Experiment with component props
- Read documentation

### 3. Build Components

```bash
npm run build
```

### 4. Check Code Quality

```bash
npm run lint          # Run linting
npm run type-check    # Check TypeScript types
```

## 📚 Using in Your Projects

### Install the Packages

In `noon-one-flows` or `supermall`:

```bash
npm install @cc-ecommerce/ui-library @cc-ecommerce/design-tokens
```

### Use Components

```tsx
import { Button, Card, Input, useTokens } from '@cc-ecommerce/ui-library';
import { tokens } from '@cc-ecommerce/design-tokens';

function MyFlow() {
  const { colors, spacing } = useTokens();

  return (
    <Card padding="md" border>
      <h2>Welcome</h2>
      <Input 
        label="Email" 
        placeholder="your@email.com"
      />
      <Button 
        variant="primary" 
        fullWidth
        style={{ marginTop: spacing[4] }}
      >
        Submit
      </Button>
    </Card>
  );
}
```

## 🎨 Using Design Tokens

### In React Components (Recommended)

```tsx
import { useTokens } from '@cc-ecommerce/ui-library';

function MyComponent() {
  const { colors, typography, spacing } = useTokens();

  return (
    <div style={{ 
      color: colors.accent.primary,
      fontSize: typography.body.base.fontSize,
      padding: spacing[4],
    }}>
      Styled with tokens
    </div>
  );
}
```

### In CSS

```css
.my-element {
  background-color: var(--color-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
}
```

### Available Tokens

```ts
// Colors
colors.neutral[50-900]    // Gray scale
colors.accent.primary     // #FF6B00
colors.accent.secondary   // #0070F3
colors.accent.success     // #0CCE6B
colors.accent.error       // #FF4444
colors.surface.*
colors.interactive.*

// Typography
typography.heading.h1-h6
typography.body.lg/base/sm/xs
typography.label.*
typography.mono.*

// Spacing
spacing[0-96]    // 4px base unit
semanticSpacing.xs/sm/md/lg/xl/2xl/3xl
```

## 🔄 Syncing from Figma

When you update design tokens in Figma:

```bash
# Get your Figma token from https://figma.com/api/tokens
FIGMA_TOKEN=your_token FIGMA_FILE_ID=your_file_id npm run sync-tokens
```

This automatically updates:
- `packages/design-tokens/src/colors.ts`
- `packages/design-tokens/src/typography.ts`
- `packages/design-tokens/src/spacing.ts`

Then publish the new version and consumers can update.

## 📁 Project Structure

```
component-library/
├── packages/
│   ├── design-tokens/           # 🎨 Design tokens
│   │   ├── src/
│   │   │   ├── colors.ts        # Color palette
│   │   │   ├── typography.ts    # Font scales
│   │   │   ├── spacing.ts       # Spacing system
│   │   │   ├── tokens.ts        # Combined export
│   │   │   └── index.ts         # Public API
│   │   ├── scripts/
│   │   │   └── sync-figma-tokens.ts  # Figma sync script
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── ui-library/              # ⚛️ React components
│       ├── src/
│       │   ├── components/
│       │   │   ├── Button/      # Button component
│       │   │   ├── Card/        # Card component
│       │   │   ├── Input/       # Input component
│       │   │   └── index.ts     # Exports
│       │   ├── hooks/
│       │   │   ├── useTokens.ts # Token hook
│       │   │   └── index.ts
│       │   ├── styles/
│       │   │   └── globals.css  # Global styles
│       │   └── index.ts         # Main export
│       ├── stories/             # Storybook stories
│       │   ├── Button.stories.tsx
│       │   ├── Card.stories.tsx
│       │   └── Input.stories.tsx
│       ├── .storybook/          # Storybook config
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md
│
├── .github/workflows/
│   └── publish.yml              # CI/CD publish workflow
├── .gitignore
├── package.json                 # Workspace root
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
└── GETTING_STARTED.md (this file)
```

## 🎯 Next Steps

### 1. Test the Library Locally

```bash
# Build components
npm run build

# Try in Storybook
npm run dev
```

### 2. Integrate with Your Projects

In `noon-one-flows` or `supermall`:

```bash
# Install packages (local or from npm registry)
npm install @cc-ecommerce/ui-library @cc-ecommerce/design-tokens

# Start using components
# Replace local components with library imports
```

### 3. Configure Figma Integration

- Set up Figma API token
- Create `.env` file with Figma credentials
- Configure automated token syncs (CI/CD)

### 4. Add More Components

Follow the [CONTRIBUTING.md](CONTRIBUTING.md) guide to:
- Create layout components (Stack, Flex, Grid)
- Add form components (Select, Checkbox, Radio)
- Build modal and dialog components
- Create toast notifications

### 5. Publish to npm

When ready to publish:

```bash
# Update version in package.json files
# Update CHANGELOG.md
# Commit and tag release
git tag v1.0.0
git push origin v1.0.0
# GitHub Actions will publish automatically
```

## 📖 Component Documentation

All components are documented in Storybook with:
- Live interactive examples
- Props documentation
- Variant showcases
- Accessibility notes
- Design token references

Start Storybook to explore: `npm run dev`

## 🎨 Design References

This library is inspired by:
- **Vercel Geist** - Clean, modern design system
- **Accessible Color Palettes** - High contrast, WCAG compliant
- **Responsive Components** - Mobile-first design

## 🔗 Useful Links

- [Design Tokens Package](packages/design-tokens/README.md)
- [UI Library Package](packages/ui-library/README.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Change Log](CHANGELOG.md)
- [Vercel Geist Reference](https://vercel.com/geist)

## ❓ Common Questions

### How do I add a new component?

See [CONTRIBUTING.md](CONTRIBUTING.md) - Components/Add a New Component section.

### How do I update design tokens?

Update in Figma, then run `npm run sync-tokens` to auto-generate code.

### How do I use the library in my project?

Install packages, then import components as shown above.

### How do I publish updates?

Tag a release (`git tag v1.0.0`), push it, GitHub Actions publishes automatically.

### Can I use this in multiple projects?

Yes! The library is designed for reuse across noon-one-flows, supermall, and other projects.

## 🚨 Need Help?

Refer to:
1. Component Storybook: `npm run dev`
2. README files in each package
3. TypeScript types and JSDoc comments in source code
4. GitHub Actions logs for publishing issues

---

Happy building! 🎉
