# @cc-ecommerce/ui-library

React component library for the CC ecommerce platform. Built with Geist-inspired design patterns.

## Installation

```bash
npm install @cc-ecommerce/ui-library @cc-ecommerce/design-tokens
```

## Quick Start

```tsx
import React from 'react';
import { Button, Card, Input, useTokens } from '@cc-ecommerce/ui-library';

export function App() {
  const { colors, spacing } = useTokens();

  return (
    <Card padding="md" border>
      <h2>Welcome</h2>
      <Input label="Email" placeholder="your@email.com" />
      <Button variant="primary" fullWidth style={{ marginTop: spacing[4] }}>
        Submit
      </Button>
    </Card>
  );
}
```

## Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="md" loading={isLoading}>
  Click me
</Button>
```

**Props:**
- `variant` - 'primary' | 'secondary' | 'ghost' | 'danger'
- `size` - 'sm' | 'md' | 'lg'
- `loading` - Show loading spinner
- `fullWidth` - Full width button
- `iconLeft` / `iconRight` - Add icons

### Card

Flexible container for grouping content.

```tsx
<Card padding="md" border hoverable>
  <h3>Card Title</h3>
  <p>Content goes here</p>
</Card>
```

**Props:**
- `padding` - 'sm' | 'md' | 'lg'
- `border` - Show border
- `hoverable` - Add hover effects

### Input

Text input field with validation and helper text.

```tsx
<Input
  type="email"
  label="Email"
  placeholder="your@email.com"
  error={emailError}
  helper="We will never share your email"
/>
```

**Props:**
- `label` - Input label
- `error` - Error message
- `helper` - Helper text
- `size` - 'sm' | 'md' | 'lg'
- `iconLeft` / `iconRight` - Add icons

## Styling

All components use CSS Modules and CSS variables for styling. Access design tokens via the `useTokens` hook or direct imports:

```tsx
import { tokens } from '@cc-ecommerce/design-tokens';

// Use in styles
const buttonStyle = {
  backgroundColor: tokens.colors.accent.primary,
  padding: tokens.spacing[4],
};

// Or via hook
const { colors, spacing } = useTokens();
```

## Design Tokens

Access colors, typography, and spacing:

```tsx
import { useTokens } from '@cc-ecommerce/ui-library';

function MyComponent() {
  const { colors, typography, spacing } = useTokens();

  return (
    <div style={{ color: colors.accent.primary }}>
      Styled text
    </div>
  );
}
```

## Storybook

View all components and their documentation:

```bash
npm run dev
# Opens Storybook at http://localhost:6006
```

## TypeScript

Full TypeScript support with type-safe tokens:

```tsx
import type { ColorToken, ButtonProps } from '@cc-ecommerce/ui-library';

const color: ColorToken = 'primary'; // ✓ Type-safe
const buttonProps: ButtonProps = {
  variant: 'primary',
  children: 'Click',
};
```

## Architecture

```
packages/
├── design-tokens/          # Colors, typography, spacing
│   └── src/
│       ├── colors.ts
│       ├── typography.ts
│       └── spacing.ts
└── ui-library/             # React components
    └── src/
        ├── components/     # Button, Card, Input, etc.
        ├── hooks/          # useTokens, etc.
        └── styles/         # Global CSS & CSS variables
```

## Contributing

When adding new components:

1. Create component folder: `src/components/ComponentName/`
2. Add component file: `ComponentName.tsx`
3. Add styles: `ComponentName.module.css`
4. Create Storybook file: `stories/ComponentName.stories.tsx`
5. Export in `src/components/index.ts`

Example:

```tsx
// src/components/Button/Button.tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, ...props }, ref) => {
    return <button ref={ref} className={styles[`${variant}-${size}`]} {...props}>{children}</button>;
  }
);
```

## License

MIT
