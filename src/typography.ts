/**
 * Utility functions for easily generating consistent web typography that is
 * in-line with how design tools behave. Utilizes the `capsize` package to
 * calculate the appropriate amount of "trimming" to emulate the behavior.
 *
 * @see https://github.com/seek-oss/capsize
 */

import { Style } from 'treat'
import { Theme } from 'treat/theme'
import capsize, { FontMetrics } from 'capsize'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/function'

export const metrics = {
  sans: {
    capHeight: 2048,
    ascent: 2728,
    descent: -680,
    lineGap: 0,
    unitsPerEm: 2816,
  },
  sansCond: {
    capHeight: 667,
    ascent: 860,
    descent: -333,
    lineGap: 0,
    unitsPerEm: 1000,
  },
}

type Fontset = {
  fontMetrics: FontMetrics
  fontSizes: (number | null)[]
  leading: number
}

export const mapFontsets = (
  theme: Theme,
  fontsets: Record<string, Fontset>,
  baseFontSize = 16,
) => {
  const bpKeys = Object.keys(theme.breakpoints) as Array<
    keyof typeof theme['breakpoints']
  >

  return pipe(
    fontsets,
    R.map(({ fontMetrics, fontSizes, leading }) => {
      const typographyStyles = fontSizes.map((fontSize) => {
        if (!fontSize) return

        const capsizeStyles = capsize({
          fontMetrics,
          fontSize: fontSize * baseFontSize,
          leading: fontSize * baseFontSize * leading,
        })

        return capsizeStyles
      })

      let result: Style = typographyStyles[0] ?? {}

      typographyStyles.forEach((style, idx) => {
        if (idx === 0 || !style) return

        result['@media'] = result['@media'] ?? {}
        const bp = theme.breakpoints[bpKeys[idx]]

        result['@media'][`(min-width: ${bp})`] = style
      })

      return result
    }),
  )
}
