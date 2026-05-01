// Color tokens from Figma
// Source: Base.Mode 1.tokens.json + Semantic.Value.tokens.json

// Base Colors - Raw palette from Figma
export const baseColors = {
  neutral: {
    white: '#ffffff',
    black: '#000000',
  },
  grey: {
    50: '#fcfcfd',
    100: '#f9f9fb',
    200: '#f2f3f7',
    300: '#eaecf0',
    400: '#d0d4dd',
    500: '#989fb3',
    600: '#666d85',
    700: '#475067',
    800: '#343d54',
    900: '#1d2539',
    1000: '#101628',
  },
  supermall: {
    50: '#f6f6fe',
    100: '#edeefd',
    200: '#dbdcfa',
    300: '#c0c2f6',
    400: '#9fa2ef',
    500: '#757adb',
    600: '#4f52d4',
    700: '#3536da',
    800: '#2122b8',
    900: '#19198a',
    1000: '#12136d',
  },
  brandBlue: {
    50: '#f5faff',
    100: '#ebf4ff',
    200: '#d6e9ff',
    300: '#bddbff',
    400: '#85bdff',
    500: '#3392ff',
    600: '#0f7eff',
    700: '#0f61ff',
    800: '#0a49b8',
    900: '#082f8c',
    1000: '#001f6b',
  },
  emerald: {
    50: '#edfdfb',
    100: '#e3fcfa',
    200: '#cef3f0',
    300: '#b8ebe7',
    400: '#7fccc8',
    500: '#3fa199',
    600: '#2f8e88',
    700: '#1f7a74',
    800: '#115a56',
    900: '#083f3b',
    1000: '#022c29',
  },
  green: {
    50: '#f6fefb',
    100: '#e3fcf2',
    200: '#cbf6e5',
    300: '#adf0d5',
    400: '#71d6ad',
    500: '#26b57c',
    600: '#12a168',
    700: '#0f8857',
    800: '#0b623f',
    900: '#07422a',
    1000: '#082b1d',
  },
  noon: {
    50: '#fefeeb',
    100: '#fefdc8',
    200: '#fff7c2',
    300: '#fff77a',
    400: '#feee00',
    500: '#ffd91a',
    600: '#f5c400',
    700: '#cc8500',
    800: '#a36200',
    900: '#804600',
    1000: '#522c00',
  },
  orange: {
    50: '#fffaf5',
    100: '#fff1e0',
    200: '#fee7cd',
    300: '#fedbb4',
    400: '#ffcb8f',
    500: '#ffa852',
    600: '#fd8835',
    700: '#e5641a',
    800: '#ae3a13',
    900: '#73260d',
    1000: '#491604',
  },
  red: {
    50: '#fff5f5',
    100: '#fff0f0',
    200: '#fed2d2',
    300: '#fdb5b5',
    400: '#f6a2a2',
    500: '#f48f8f',
    600: '#f04242',
    700: '#d92626',
    800: '#b81414',
    900: '#7b1414',
    1000: '#510b0b',
  },
  purple: {
    50: '#fdf6ff',
    100: '#fbf0fe',
    200: '#f5defd',
    300: '#efcafc',
    400: '#e290fe',
    500: '#c655ec',
    600: '#bd3ae9',
    700: '#ad24db',
    800: '#741b92',
    900: '#491759',
    1000: '#320f3d',
  },
  pink: {
    50: '#fff4f8',
    100: '#fce9ef',
    200: '#fcdfe8',
    300: '#faccdc',
    400: '#fe9fbd',
    500: '#fb73a0',
    600: '#f7306f',
    700: '#e01854',
    800: '#b3093d',
    900: '#6e0323',
    1000: '#520018',
  },
  alphaLight: {
    4: '#ffffff0a',
    8: '#ffffff14',
    16: '#ffffff29',
    24: '#ffffff3d',
    50: '#ffffff80',
    64: '#ffffffa3',
    80: '#ffffffcc',
  },
  alphaDark: {
    4: '#0000000a',
    8: '#00000014',
    16: '#00000029',
    24: '#0000003d',
    50: '#00000080',
    64: '#000000a3',
    80: '#000000cc',
  },
} as const;

// Semantic Colors - Meaningful token names for UI usage
export const semanticColors = {
  // Text & Icon colors
  textAndIcon: {
    primary: baseColors.grey[900],
    secondary: baseColors.grey[700],
    tertiary: baseColors.grey[600],
    muted: baseColors.grey[500],
    onSurfaceBold: baseColors.neutral.white,
    onSurfaceSubtle: baseColors.alphaLight[80],
    action: baseColors.brandBlue[700],
    supermall: baseColors.supermall[800],
    error: baseColors.red[700],
    warning: baseColors.orange[700],
    yellowLight: baseColors.noon[400],
    yellowDark: baseColors.noon[800],
    success: baseColors.green[700],
  },

  // Surface/Background colors
  surface: {
    primary: baseColors.neutral.white,
    secondary: baseColors.grey[100],
    tertiary: baseColors.grey[200],
    muted: baseColors.grey[300],
    tertiaryInverted: baseColors.grey[800],
    secondaryInverted: baseColors.grey[900],
    primaryInverted: baseColors.grey[1000],
    actionSubtle: baseColors.brandBlue[100],
    actionBold: baseColors.brandBlue[600],
    supermallSubtle: baseColors.supermall[100],
    supermallBold: baseColors.supermall[800],
    warningSubtle: baseColors.orange[100],
    warningBold: baseColors.orange[600],
    errorSubtle: baseColors.red[100],
    errorBold: baseColors.red[600],
    successSubtle: baseColors.green[100],
    successBold: baseColors.green[600],
  },

  // Border colors
  border: {
    primary: baseColors.grey[200],
    secondary: baseColors.grey[100],
    tertiary: baseColors.grey[300],
  },

  // Component specific
  interactive: {
    hover: baseColors.alphaDark[8],
    active: baseColors.alphaDark[16],
    disabled: baseColors.alphaDark[24],
    focusRing: baseColors.brandBlue[600],
  },
} as const;

// Exported colors object for backward compatibility
export const colors = {
  // Brand colors
  accent: {
    primary: baseColors.orange[500], // Warm orange
    secondary: baseColors.brandBlue[600],
    success: baseColors.green[700],
    warning: baseColors.orange[700],
    error: baseColors.red[700],
    info: baseColors.brandBlue[600],
  },

  // Text colors
  text: semanticColors.textAndIcon,

  // Surface colors
  surface: semanticColors.surface,

  // Neutral/Grayscale
  neutral: baseColors.grey,

  // Interactive states
  interactive: semanticColors.interactive,

  // Specific named colors
  supermall: baseColors.supermall,
  green: baseColors.green,
  emerald: baseColors.emerald,
  noon: baseColors.noon,
  orange: baseColors.orange,
  red: baseColors.red,
  purple: baseColors.purple,
  pink: baseColors.pink,

  // Foreground/Background
  foreground: baseColors.grey[900],
  background: baseColors.neutral.white,
  border: semanticColors.border.primary,
  divider: baseColors.grey[100],
} as const;

// Token type exports
export type ColorToken = keyof typeof colors;
export type BaseColorToken = keyof typeof baseColors;
export type SemanticColorToken = keyof typeof semanticColors;
