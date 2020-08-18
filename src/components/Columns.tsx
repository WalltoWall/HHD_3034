import * as React from 'react'
import { Box, BoxProps, ResponsiveProp } from '@walltowall/calico'

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

const countToWidthMap = {
  1: 'full',
  2: '6/12',
  3: '4/12',
  4: '3/12',
  6: '2/12',
} as const

export type ColumnsProps = {
  variant?: keyof typeof variants
  children: React.ReactNode
  space: NonNullable<NonNullable<BoxProps['styles']>['padding']>
  count: ResponsiveProp<keyof typeof countToWidthMap>
  alignY?: NonNullable<BoxProps['styles']>['alignItems']
} & BoxProps

export const Columns = ({
  variant = 'div',
  children,
  space,
  count,
  alignY,
  ...props
}: ColumnsProps) => {
  const negativeSpace = (Array.isArray(space)
    ? space.map((val) => -val)
    : -space) as typeof space

  const columnWidth = (Array.isArray(count)
    ? count.map((val: keyof typeof countToWidthMap) => countToWidthMap[val])
    : countToWidthMap[count as keyof typeof countToWidthMap]) as NonNullable<
    BoxProps['styles']
  >['width']

  const { childComponent, component } = variants[variant]

  return (
    <Box
      {...props}
      styles={{
        marginTop: negativeSpace,
        ...props.styles,
      }}
    >
      <Box
        component={component}
        styles={{
          display: 'flex',
          flexWrap: 'wrap',
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
                styles={{
                  paddingTop: space,
                  paddingLeft: space,
                  width: columnWidth,
                }}
              >
                {child}
              </Box>
            ),
        )}
      </Box>
    </Box>
  )
}
