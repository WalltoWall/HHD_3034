/**
 * Design tokens used to create atomic CSS class names. Calico is used to
 * convert these tokens into usable classes via `<Box>` and `useBoxStyles()`.
 *
 * @see https://github.com/WalltoWall/calico
 *
 * This file is used in conjunction with the following files to connect to
 * Calico.
 *
 *  - /src/theme.treat.ts
 *  - /types/calico.d.ts
 */

import {
  baseCalicoTheme,
  createCalicoTheme,
} from '@walltowall/calico/src/createCalicoTheme'

export type Theme = typeof theme

export const colors = {
  white: '#fff',
  red40: '#ad2420',
  gray30: '#584d4d',
  beige70: '#f2d49b',
} as const

const space = {
  auto: 'auto',
  [-48]: '-12rem',
  [-40]: '-10rem',
  [-35]: '-8.75rem',
  [-30]: '-7.5rem',
  [-29]: '-7.25rem',
  [-28]: '-7rem',
  [-27]: '-6.75rem',
  [-26]: '-6.5rem',
  [-25]: '-6.25rem',
  [-24]: '-6rem',
  [-23]: '-5.75rem',
  [-22]: '-5.5rem',
  [-21]: '-5.25rem',
  [-20]: '-5rem',
  [-19]: '-4.75rem',
  [-18]: '-4.5rem',
  [-17]: '-4.25rem',
  [-16]: '-4rem',
  [-15]: '-3.75rem',
  [-14]: '-3.5rem',
  [-13]: '-3.25rem',
  [-12]: '-3rem',
  [-11]: '-2.75rem',
  [-10]: '-2.5rem',
  [-9]: '-2.25rem',
  [-8]: '-2rem',
  [-7]: '-1.75rem',
  [-6]: '-1.5rem',
  [-5]: '-1.25rem',
  [-4]: '-1rem',
  [-3.5]: '-0.875',
  [-3]: '-0.75rem',
  [-2.5]: '-0.625rem',
  [-2]: '-0.5rem',
  [-1.5]: '-0.375rem',
  [-1]: '-0.25rem',
  [-0.5]: '-0.125rem',
  0: 0,
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  19: '4.75rem',
  20: '5rem',
  21: '5.25rem',
  22: '5.5rem',
  23: '5.75rem',
  24: '6rem',
  25: '6.25rem',
  26: '6.5rem',
  27: '6.75rem',
  28: '7rem',
  29: '7.25rem',
  30: '7.5rem',
} as const

export const theme = createCalicoTheme({
  breakpoints: {
    mobile: '0rem',
    tablet: '48rem',
    desktop: '55rem',
    desktopWide: '65rem',
  },

  rules: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,

    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,

    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    gap: space,

    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      sansCond: '"alternate-gothic-no-3-d", Helvetica, Arial, sans-serif',
    },

    maxWidth: {
      none: 'none',
      medium: '48rem',
      large: '55rem',
      'large+': '60rem',
      '15rem': '15rem',
    },

    transitionDuration: {
      slow: '300ms',
      normal: '200ms',
      fast: '100ms',
    },

    width: {
      ...baseCalicoTheme.rules.width,
      '4.5/12': (4.5 / 12) * 100 + '%',
      '5.5/12': (5.5 / 12) * 100 + '%',
      '1.5rem': '1.5rem',
      '4.5rem': '4.5rem',
      '5.5rem': '5.5rem',
      '7rem': '7rem',
      '10rem': '10rem',
      '12rem': '12rem',
    },

    height: {
      ...baseCalicoTheme.rules.height,
      '4.5rem': '4.5rem',
      '5.5rem': '5.5rem',
    },

    left: {
      ...baseCalicoTheme.rules.left,
      '6/12': '50%',
    },

    top: {
      ...baseCalicoTheme.rules.top,
      '6/12': '50%',
    },

    letterSpacing: {
      ...baseCalicoTheme.rules.letterSpacing,
      xs: '0.075em',
      s: '0.1em',
    },

    transform: {
      offsetForCentering: 'translate(-50%, -50%)',
      rotate4deg: 'rotate(4deg)',
      rotateNeg4deg: 'rotate(-4deg)',
    },

    transitionProperty: {
      opacity: 'opacity',
    },

    textDecoration: {
      underline: 'underline',
    },
  },

  variants: {
    opacity: {
      hover: true,
      focus: true,
    },
    textDecoration: {
      hover: true,
      focus: true,
    },
  },
})
