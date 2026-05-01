# CC Component Library Platform

A scalable, Geist-inspired component library platform for the CC ecommerce ecosystem. Provides a centralized, versioned component library with design tokens synced from Figma.

## Architecture

```
component-library/
├── packages/
│   ├── design-tokens/      # Colors, typography, spacing (Figma-synced)
│   └── ui-library/         # React components + Storybook
├── .github/workflows/      # CI/CD for publishing
└── README.md
```

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start Storybook (view components)
npm run dev

# Build components
npm run build

# Run linting
npm run lint
```

### Sync Figma Tokens

Update design tokens from your Figma file:

```bash
FIGMA_TOKEN=<your-token> FIGMA_FILE_ID=<file-id> npm run sync-tokens
```

Get your Figma personal access token from: https://figma.com/api/tokens

## Packages

### @cc-ecommerce/design-tokens

Design tokens (colors, typography, spacing) synced from Figma. Single source of truth for all design values.

```ts
import { tokens } from '@cc-ecommerce/design-tokens';

tokens.colors.accent.primary    // #FF6B00
tokens.typography.heading.h1    // { fontSize: '2.5rem', ... }
tokens.spacing[4]               // 16px
```

[View Design Tokens Package](packages/design-tokens/README.md)

### @cc-ecommerce/ui-library

React components built with design tokens. Provides Button, Card, Input, and more.

```tsx
import { Button, Card, Input } from '@cc-ecommerce/ui-library';

<Button variant="primary">Click me</Button>
```

[View UI Library Package](packages/ui-library/README.md)

## Usage in Your Projects

### Install

```bash
npm install @cc-ecommerce/ui-library @cc-ecommerce/design-tokens
```

### Use Components

```tsx
import { Button, Card, Input, useTokens } from '@cc-ecommerce/ui-library';
import { tokens } from '@cc-ecommerce/design-tokens';

export function MyComponent() {
  const { colors, spacing } = useTokens();

  return (
    <Card padding="md" border>
      <h2>Sign Up</h2>
      <Input label="Email" placeholder="your@email.com" />
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

## Design System

Inspired by [Vercel Geist](https://vercel.com/geist) with:

- **High contrast** accessible color system
- **Custom typography** optimized for readability
- **Grid-based layouts** for consistency
- **Minimal shadows** and clean aesthetics
- **Smooth transitions** and interactions

## Components

Currently available:
- **Button** - Primary interactive element
- **Card** - Content container
- **Input** - Text input field

Coming soon:
- Stack, Flex, Grid (layout primitives)
- Modal, Dialog, Drawer
- Select, Checkbox, Radio
- Tabs, Accordion
- Toast, Alert

## Design Tokens

### Colors

```ts
tokens.colors.accent.primary    // #FF6B00 (brand orange)
tokens.colors.accent.secondary  // #0070F3 (vercel blue)
tokens.colors.neutral           // 50-900 gray scale
tokens.colors.success           // #0CCE6B
tokens.colors.error             // #FF4444
```

### Typography

```ts
tokens.typography.heading.h1    // 2.5rem, 700 weight
tokens.typography.heading.h2    // 2rem, 700 weight
tokens.typography.body.base     // 1rem, 400 weight
tokens.typography.label.sm      // 0.75rem, 500 weight
```

### Spacing

4px-based scale: 0, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px...

```ts
tokens.spacing[1]   // 4px
tokens.spacing[4]   // 16px
tokens.spacing[8]   // 32px
tokens.spacing[16]  // 64px
```

## Workflow

### Adding New Components

1. Create component in `packages/ui-library/src/components/YourComponent/`
2. Add styles as `YourComponent.module.css`
3. Create Storybook stories in `packages/ui-library/stories/`
4. Export in `packages/ui-library/src/components/index.ts`

### Updating Design Tokens

1. Update token in Figma design file
2. Run `npm run sync-tokens` to pull from Figma API
3. Commit token changes
4. Publish new version of `@cc-ecommerce/design-tokens`
5. Consumers update their dependency

### Publishing Releases

```bash
# Bump version in packages/*/package.json
npm version patch    # or minor/major

# Build and publish
npm run build
npm publish
```

## Integration with Your Repos

### noon-one-flows

```bash
npm install @cc-ecommerce/ui-library @cc-ecommerce/design-tokens
```

Replace local components with library imports:

```tsx
// Before
import { Button } from '../components/Button';

// After
import { Button } from '@cc-ecommerce/ui-library';
```

### supermall

Same process - install and replace local components.

## CI/CD

GitHub Actions workflow (`.github/workflows/publish.yml`) automatically:
- Runs tests and linting
- Builds packages
- Publishes to npm on git tags

## Documentation

- **Storybook** - View all components: `npm run dev`
- **Design Tokens** - [design-tokens/README.md](packages/design-tokens/README.md)
- **UI Library** - [ui-library/README.md](packages/ui-library/README.md)

## Resources

- [Vercel Geist Design System](https://vercel.com/geist)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Storybook Documentation](https://storybook.js.org)

## License

MIT
