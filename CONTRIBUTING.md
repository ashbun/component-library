# Contributing to CC Component Library

## Overview

This component library consists of two main packages:

1. **@cc-ecommerce/design-tokens** - Design tokens synced from Figma
2. **@cc-ecommerce/ui-library** - React components using design tokens

## Getting Started

```bash
# Install dependencies
npm install

# Start development (Storybook)
npm run dev

# Build packages
npm run build

# Run linting
npm run lint

# Type check
npm run type-check
```

## Adding a New Component

### 1. Create Component Structure

```bash
mkdir -p packages/ui-library/src/components/MyComponent
```

### 2. Create Component File

```tsx
// packages/ui-library/src/components/MyComponent/MyComponent.tsx
import React from 'react';
import styles from './MyComponent.module.css';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <div ref={ref} className={styles[`variant-${variant}`]} {...props}>
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
```

### 3. Create Styles

```css
/* packages/ui-library/src/components/MyComponent/MyComponent.module.css */
.variant-primary {
  background-color: var(--color-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}

.variant-secondary {
  background-color: var(--color-secondary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

### 4. Create Storybook Stories

```tsx
// packages/ui-library/stories/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '../src/components/MyComponent';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'My Component',
  },
};
```

### 5. Export Component

```ts
// packages/ui-library/src/components/index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';
```

## Design Token Usage

Always use design tokens for styling:

```tsx
// Colors
var(--color-primary)
var(--color-neutral-500)
var(--color-success)

// Spacing
var(--spacing-1)    // 4px
var(--spacing-4)    // 16px
var(--spacing-8)    // 32px

// Border radius
var(--radius-md)    // 6px
var(--radius-lg)    // 8px

// Shadows
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)

// Transitions
var(--transition-fast)  // 100ms
var(--transition-base)  // 150ms
```

## Component Guidelines

### TypeScript
- Always extend appropriate HTML element interfaces
- Export prop interfaces for component consumers
- Use `React.forwardRef` for components that need DOM access

### Accessibility
- Ensure proper ARIA attributes
- Test with screen readers
- Maintain focus states
- Use semantic HTML

### Styling
- Use CSS Modules (`.module.css`)
- Reference design tokens via CSS variables
- Support light and dark modes
- Test on mobile devices

### Documentation
- Document all props in JSDoc comments
- Create Storybook stories for all variants
- Include usage examples
- Note any accessibility considerations

## Syncing Figma Tokens

When design tokens change in Figma:

```bash
FIGMA_TOKEN=<your-token> FIGMA_FILE_ID=<file-id> npm run sync-tokens
```

This updates:
- `packages/design-tokens/src/colors.ts`
- `packages/design-tokens/src/typography.ts`
- `packages/design-tokens/src/spacing.ts`

Commit the updated tokens and publish a new version.

## Publishing

1. Update version in `packages/*/package.json`
2. Update CHANGELOG.md
3. Commit changes
4. Tag release: `git tag v1.0.0`
5. Push tag: `git push origin v1.0.0`
6. GitHub Actions automatically publishes to npm

## Code Style

- Use TypeScript for type safety
- Follow naming conventions
- Keep components focused and simple
- Avoid unnecessary complexity
- Write clear, self-documenting code

## Testing

Components should be tested in Storybook for:
- All variants and states
- Different sizes
- Responsive behavior
- Accessibility
- Dark mode support

## Questions?

Refer to the main [README.md](README.md) or existing component implementations.
