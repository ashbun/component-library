// Spacing tokens from Figma
// Source: Base.Mode 1.tokens.json -> number dimension values

export const spacing = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  11: '11px',
  12: '12px',
  14: '14px',
  16: '16px',
  17: '17px',
  18: '18px',
  20: '20px',
  22: '22px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
  44: '44px',
  48: '48px',
  52: '52px',
  56: '56px',
  60: '60px',
  64: '64px',
  72: '72px',
  80: '80px',
  88: '88px',
  96: '96px',
  128: '128px',
  9999: '9999px',
} as const;

// Negative spacing
export const negativeSpacing = {
  '-2': '-2px',
  '-4': '-4px',
  '-6': '-6px',
  '-8': '-8px',
  '-12': '-12px',
  '-0.1': '-0.1px',
  '-0.15': '-0.15px',
  '-0.25': '-0.25px',
} as const;

// Decimal/fractional spacing
export const fractionalSpacing = {
  '0.25': '0.25px',
  '0.5': '0.5px',
} as const;

// Semantic spacing aliases
export const semanticSpacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
  '5xl': '96px',
} as const;

// Padding helpers
export const padding = spacing;

// Margin helpers
export const margin = spacing;

// Gap helpers
export const gap = spacing;

// Border radius (common values)
export const borderRadius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const;

// Line height values
export const lineHeight = {
  tight: '1.2',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

// Letter spacing
export const letterSpacing = {
  tighter: '-0.02em',
  tight: '-0.01em',
  normal: '0em',
  wide: '0.005em',
  wider: '0.01em',
  widest: '0.05em',
} as const;

// Shadow definitions
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
} as const;

// Transitions/animations
export const transitions = {
  fast: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export type SpacingToken = keyof typeof spacing;
export type SemanticSpacingToken = keyof typeof semanticSpacing;
export type BorderRadiusToken = keyof typeof borderRadius;
