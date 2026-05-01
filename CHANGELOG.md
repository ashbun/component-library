# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-05-01

### Added
- Initial release of component library platform
- `@cc-ecommerce/design-tokens` package
  - Colors (neutral scale, accent colors, semantic colors)
  - Typography (headings, body, labels, mono)
  - Spacing system (4px-based scale)
  - Figma token sync script
- `@cc-ecommerce/ui-library` package
  - Button component (primary, secondary, ghost, danger variants)
  - Card component (with padding and border options)
  - Input component (with validation and helper text)
  - Storybook documentation
  - CSS Modules with CSS variables
  - TypeScript support
- Global CSS with Geist-inspired design
- Design token hooks for React components
- GitHub Actions CI/CD workflow

### Design Tokens
- **Colors**: 9-step neutral scale, accent colors, semantic colors
- **Typography**: 6 heading levels, body scales (lg, base, sm, xs), labels, monospace
- **Spacing**: 4px base unit with scales from 0 to 384px
- **CSS Variables**: Global theme variables with dark mode support

### Components
- **Button**: Multiple variants (primary, secondary, ghost, danger), sizes (sm, md, lg), loading state, icons
- **Card**: Flexible container with padding variants, optional border, hoverable state
- **Input**: Text input with label, error messages, helper text, icons, sizes

### Next Steps
- Add more components (Stack, Flex, Grid, Modal, etc.)
- Integrate with noon-one-flows and supermall
- Setup private npm registry for publishing
- Automated token sync from Figma API
