import { tokens } from '@cc-ecommerce/design-tokens';

/**
 * Hook to access design tokens in components
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { colors, typography, spacing } = useTokens();
 *
 *   return (
 *     <div style={{ color: colors.accent.primary }}>
 *       Styled content
 *     </div>
 *   );
 * }
 * ```
 */
export function useTokens() {
  return tokens;
}
