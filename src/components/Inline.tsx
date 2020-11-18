import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

const variants = {
  list: {
    component: 'ul',
    childComponent: 'li',
  },
  orderedList: {
    component: 'ol',
    childComponent: 'li',
  },
  div: {
    component: 'div',
    childComponent: 'div',
  },
} as const

type InlineProps = {
  variant?: keyof typeof variants
  space: NonNullable<NonNullable<BoxProps['styles']>['padding']>
  spaceY?: NonNullable<NonNullable<BoxProps['styles']>['padding']>
  align?: NonNullable<BoxProps['styles']>['justifyContent']
  alignY?: NonNullable<BoxProps['styles']>['alignItems']
  wrap?: boolean
  direction?: NonNullable<BoxProps['styles']>['flexDirection']
} & Omit<BoxProps, 'wrap'>

export const Inline = ({
  children,
  variant = 'div',
  space,
  spaceY = space,
  align,
  alignY,
  wrap = true,
  direction = 'row',
  ...props
}: InlineProps) => {
  const negativeSpace = (Array.isArray(space)
    ? space.map((val) => -val)
    : -space) as typeof space

  const negativeSpaceY = (Array.isArray(spaceY)
    ? spaceY.map((val) => -val)
    : -spaceY) as typeof space

  const { childComponent, component } = variants[variant]

  return (
    <Box
      {...props}
      styles={{
        marginTop: negativeSpaceY,
        ...props.styles,
      }}
    >
      <Box
        component={component}
        styles={{
          display: 'flex',
          flexWrap: wrap ? 'wrap' : 'nowrap',
          flexDirection: direction,
          justifyContent: align,
          alignItems: alignY,
          marginLeft: negativeSpace,
        }}
      >
        {React.Children.map(
          children,
          (child) =>
            child && (
              <Box
                component={childComponent}
                styles={{ paddingTop: spaceY, paddingLeft: space }}
              >
                {child}
              </Box>
            ),
        )}
      </Box>
    </Box>
  )
}
