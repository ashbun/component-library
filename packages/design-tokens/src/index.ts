// Design tokens - Single source of truth for all design values
// Synced from Figma via sync-figma-tokens script

export { tokens } from './tokens';
export { colors } from './colors';
export { typography } from './typography';
export { spacing, semanticSpacing, padding, margin, gap } from './spacing';

// Re-export all types
export type * from './colors';
export type * from './typography';
export type * from './spacing';

// Token utility for React components
export function useTokens() {
  return {
    colors,
    typography,
    spacing,
  };
}

import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
