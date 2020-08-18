import { styleMap } from 'treat'

import { metrics, mapFontsets } from '../typography'

const fontsets = {
  'sans-12': {
    fontMetrics: metrics.sans,
    fontSizes: [0.75],
    leading: 1.5,
  },
  'sans-14': {
    fontMetrics: metrics.sans,
    fontSizes: [0.875],
    leading: 1.5,
  },
  'sans-16': {
    fontMetrics: metrics.sans,
    fontSizes: [1],
    leading: 1.5,
  },
  'sansCond-13': {
    fontMetrics: metrics.sansCond,
    fontSizes: [0.8125],
    leading: 1.35,
  },
  'sansCond-16': {
    fontMetrics: metrics.sansCond,
    fontSizes: [1],
    leading: 1.35,
  },
  'sansCond-20-30': {
    fontMetrics: metrics.sansCond,
    fontSizes: [1.25, null, 1.5, 1.875],
    leading: 1.25,
  },
}

export type variations = keyof typeof fontsets

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
