export const defaultTheme = {
  colors: {
    yellow1: '#FFDB00',
    yellow2: '#EBC900',
    blue1: '#EDF1FD',
    blue2: '#DAE2F9',
    blue3: '#194bDC',
    red1: '#FDF3F2',
    red2: '#E9DFDF',
    red3: '#E76055',
    red4: '#D3584E',
    gray1: '#222222',
    gray2: '#89919A',
    white1: '#FFFFFF',
    black1: '#000000'
  },
  fonts: {
    untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
  },
  space: { // 8 px grid
    1: 8,
    2: 16,
    3: 24,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 72,
  },
  sizes: {
    1: 8,
    2: 16,
    3: 24,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 72,
  },
  fontSizes: { // button size
    1: 12,
    2: 14,
    3: 16,
  },
  radii: {
    1: 4,
    2: 6,
    3: 8,
    4: 12
  },
  zIndices: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    max: 999,
  },
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},
  borderWidths: {},
  borderStyles: {},
  shadows: {},
  transitions: {}
};

export type ITheme = typeof defaultTheme;
