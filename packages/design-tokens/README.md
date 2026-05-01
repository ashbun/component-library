# @cc-ecommerce/design-tokens

Design tokens (colors, typography, spacing) for the CC ecommerce platform. Synced from Figma design system.

## Installation

```bash
npm install @cc-ecommerce/design-tokens
```

## Usage

### Importing tokens

```typescript
import { tokens } from '@cc-ecommerce/design-tokens';

// Access color tokens
const primaryColor = tokens.colors.accent.primary; // #FF6B00

// Access typography
const headingStyle = tokens.typography.heading.h1;

// Access spacing
const padding = tokens.spacing[4]; // 16px
```

### React Hook

```typescript
import { useTokens } from '@cc-ecommerce/design-tokens';

function MyComponent() {
  const { colors, typography, spacing } = useTokens();
  
  return (
    <div style={{ 
      color: colors.accent.primary,
      padding: spacing[4],
    }}>
      Hello
    </div>
  );
}
```

### CSS Variables

Import CSS variables for use in stylesheets:

```css
@import '@cc-ecommerce/design-tokens/tokens.css';

.button {
  background: var(--color-primary);
  padding: var(--spacing-4);
  font: var(--typography-body-base);
}
```

## Token Structure

### Colors

- `neutral` - Gray scale (50-900)
- `accent` - Brand colors (primary, secondary, success, error, warning)
- `surface` - Component backgrounds
- `interactive` - States (hover, active, disabled)

### Typography

- `heading` - h1-h6 scales
- `body` - Text sizes (lg, base, sm, xs)
- `label` - Labels and captions
- `mono` - Monospace/code text

### Spacing

4px-based scale: 0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 80, 96...

## Syncing from Figma

To sync design tokens from Figma:

```bash
FIGMA_TOKEN=<your-token> FIGMA_FILE_ID=<file-id> npm run sync-figma-tokens
```

Get your Figma personal access token from: https://figma.com/api/tokens

## TypeScript Support

Full TypeScript support with token types:

```typescript
import type { ColorToken, TypographyToken, SpacingToken } from '@cc-ecommerce/design-tokens';

const color: ColorToken = 'neutral'; // ✓ Type-safe
const color: ColorToken = 'invalid'; // ✗ TypeScript error
```
