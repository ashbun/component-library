// Main token export - combines all design tokens
// Synced from Figma design tokens
import { colors, baseColors, semanticColors } from './colors';
import { typography } from './typography';
import { spacing, semanticSpacing, padding, margin, gap, borderRadius, lineHeight, letterSpacing, shadows, transitions } from './spacing';

export const tokens = {
  colors,
  baseColors,
  semanticColors,
  typography,
  spacing,
  semanticSpacing,
  padding,
  margin,
  gap,
  borderRadius,
  lineHeight,
  letterSpacing,
  shadows,
  transitions,
} as const;

// Re-export individual token types
export type { ColorToken, BaseColorToken, SemanticColorToken } from './colors';
export type { TypographyToken, HeadingStyle, BodyStyle, LabelStyle } from './typography';
export type { SpacingToken, SemanticSpacingToken, BorderRadiusToken } from './spacing';

export default tokens;
