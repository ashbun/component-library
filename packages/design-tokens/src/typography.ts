// Typography tokens from Figma
// Source: text.styles.tokens.json

// Font references
export const fontFamilies = {
  primary: 'Noontree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: '"Courier New", Menlo, Monaco, monospace',
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// Heading styles - H40 down to H16
export const headingStyles = {
  h40: {
    bold: {
      fontSize: '40px',
      fontWeight: fontWeights.bold,
      lineHeight: '48px',
      letterSpacing: '-0.02em',
    },
    extrabold: {
      fontSize: '40px',
      fontWeight: fontWeights.extrabold,
      lineHeight: '48px',
      letterSpacing: '-0.02em',
    },
  },
  h32: {
    bold: {
      fontSize: '32px',
      fontWeight: fontWeights.bold,
      lineHeight: '40px',
      letterSpacing: '-0.015em',
    },
    extrabold: {
      fontSize: '32px',
      fontWeight: fontWeights.extrabold,
      lineHeight: '40px',
      letterSpacing: '-0.015em',
    },
  },
  h28: {
    bold: {
      fontSize: '28px',
      fontWeight: fontWeights.bold,
      lineHeight: '36px',
      letterSpacing: '-0.01em',
    },
  },
  h24: {
    bold: {
      fontSize: '24px',
      fontWeight: fontWeights.bold,
      lineHeight: '32px',
      letterSpacing: '-0.01em',
    },
  },
  h20: {
    bold: {
      fontSize: '20px',
      fontWeight: fontWeights.bold,
      lineHeight: '28px',
      letterSpacing: '-0.005em',
    },
  },
  h18: {
    bold: {
      fontSize: '18px',
      fontWeight: fontWeights.bold,
      lineHeight: '26px',
      letterSpacing: '0em',
    },
  },
  h16: {
    bold: {
      fontSize: '16px',
      fontWeight: fontWeights.bold,
      lineHeight: '24px',
      letterSpacing: '0em',
    },
  },
} as const;

// Body text styles
export const bodyStyles = {
  b16: {
    regular: {
      fontSize: '16px',
      fontWeight: fontWeights.regular,
      lineHeight: '24px',
      letterSpacing: '0em',
    },
    medium: {
      fontSize: '16px',
      fontWeight: fontWeights.medium,
      lineHeight: '24px',
      letterSpacing: '0em',
    },
    semibold: {
      fontSize: '16px',
      fontWeight: fontWeights.semibold,
      lineHeight: '24px',
      letterSpacing: '0em',
    },
  },
  b14: {
    regular: {
      fontSize: '14px',
      fontWeight: fontWeights.regular,
      lineHeight: '20px',
      letterSpacing: '0em',
    },
    medium: {
      fontSize: '14px',
      fontWeight: fontWeights.medium,
      lineHeight: '20px',
      letterSpacing: '0em',
    },
  },
  b12: {
    regular: {
      fontSize: '12px',
      fontWeight: fontWeights.regular,
      lineHeight: '16px',
      letterSpacing: '0em',
    },
    medium: {
      fontSize: '12px',
      fontWeight: fontWeights.medium,
      lineHeight: '16px',
      letterSpacing: '0em',
    },
  },
} as const;

// Label/Caption styles
export const labelStyles = {
  l14: {
    medium: {
      fontSize: '14px',
      fontWeight: fontWeights.medium,
      lineHeight: '20px',
      letterSpacing: '0.005em',
    },
    semibold: {
      fontSize: '14px',
      fontWeight: fontWeights.semibold,
      lineHeight: '20px',
      letterSpacing: '0.005em',
    },
  },
  l12: {
    medium: {
      fontSize: '12px',
      fontWeight: fontWeights.medium,
      lineHeight: '16px',
      letterSpacing: '0.01em',
    },
    semibold: {
      fontSize: '12px',
      fontWeight: fontWeights.semibold,
      lineHeight: '16px',
      letterSpacing: '0.01em',
    },
  },
} as const;

// Export combined typography object
export const typography = {
  fontFamilies,
  fontWeights,
  heading: headingStyles,
  body: bodyStyles,
  label: labelStyles,

  // Convenience shortcuts
  h1: headingStyles.h40.bold,
  h2: headingStyles.h32.bold,
  h3: headingStyles.h28.bold,
  h4: headingStyles.h24.bold,
  h5: headingStyles.h20.bold,
  h6: headingStyles.h16.bold,

  bodyBase: bodyStyles.b16.regular,
  bodySm: bodyStyles.b14.regular,
  bodyXs: bodyStyles.b12.regular,

  labelBase: labelStyles.l14.medium,
  labelSm: labelStyles.l12.medium,
} as const;

export type TypographyToken = keyof typeof typography;
export type HeadingStyle = keyof typeof headingStyles;
export type BodyStyle = keyof typeof bodyStyles;
export type LabelStyle = keyof typeof labelStyles;
