import React from 'react'
import {
  Box,
  BoxProps,
  BaseBoxStylesProps,
  ResponsiveProp,
  normalizeResponsiveProp,
} from '@walltowall/calico'
import * as RA from 'fp-ts/es6/ReadonlyArray'

const variants = {
  base: {
    paddingLeft: [6, 8, 10],
    paddingRight: [6, 8, 10],
    paddingTop: [10, 13, 16],
    paddingBottom: [10, 13, 16],
  },
} as const

type BoundedBoxProps = BoxProps & {
  children?: React.ReactNode
  variant?: keyof typeof variants
  innerMaxWidth?: BaseBoxStylesProps['maxWidth']
  nextSharesBg?: ResponsiveProp<boolean>
}

export const BoundedBox = ({
  children,
  variant = 'base',
  innerMaxWidth,
  nextSharesBg = false,
  ...props
}: BoundedBoxProps) => {
  const variantStyles = variants[variant]

  const resolvedPaddingBottom = RA.zipWith(
    normalizeResponsiveProp(nextSharesBg),
    normalizeResponsiveProp(variantStyles.paddingBottom),
    (a, b) => (a ? 0 : b),
  ) as NonNullable<BoxProps['styles']>['paddingBottom']

  return (
    <Box
      {...props}
      styles={{
        paddingLeft: variantStyles.paddingLeft,
        paddingRight: variantStyles.paddingRight,
        paddingTop: variantStyles.paddingTop,
        paddingBottom: resolvedPaddingBottom,
        ...props.styles,
      }}
    >
      <Box
        styles={{
          maxWidth: innerMaxWidth,
          width: 'full',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 'full',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
