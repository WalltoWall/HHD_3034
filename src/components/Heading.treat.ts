import { styleMap } from 'treat'

import { metrics, mapFontsets } from '../typography'

const fontsets = {
  sansA: {
    fontMetrics: metrics.sansCond,
    fontSizes: [1.375, 1.6875],
    leading: 1.4,
  },
  sansB: {
    fontMetrics: metrics.sansCond,
    fontSizes: [1.6875, 2.25],
    leading: 1.4,
  },
  sansC: {
    fontMetrics: metrics.sansCond,
    fontSizes: [1.125],
    leading: 1.4,
  },
}

export type variations = keyof typeof fontsets

export const variants = styleMap((theme) => mapFontsets(theme, fontsets))
