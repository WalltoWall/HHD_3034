import React from 'react'
import clsx from 'clsx'
import { useStyles } from 'react-treat'
import { Box, BoxProps } from '@walltowall/calico'
import ConditionalWrap from 'conditional-wrap'

import { useDebug } from '../hooks/useDebug'

import * as styleRefs from './Text.treat'

const variantExtraStyles: Record<styleRefs.variations, BoxProps['styles']> = {
  'sans-12': {
    fontFamily: 'sans',
  },
  'sans-16': {
    fontFamily: 'sans',
  },
  'sansCond-13': {
    fontFamily: 'sansCond',
  },
  'sansCond-16': {
    fontFamily: 'sansCond',
  },
  'sansCond-20-30': {
    fontFamily: 'sansCond',
  },
} as const

type TextProps = Omit<BoxProps, 'component'> & {
  component?:
    | 'p'
    | 'span'
    | 'strong'
    | 'em'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'div'
  children?: React.ReactNode
  variant?: styleRefs.variations
  debug?: boolean
}

export const Text = ({
  component = 'div',
  variant = 'sans-16',
  children,
  className,
  ...props
}: TextProps) => {
  const styles = useStyles(styleRefs)
  const debug = useDebug()

  return (
    <ConditionalWrap
      condition={debug}
      wrap={(children) => (
        <div style={{ boxShadow: '0 0 0 0.5px #f0f', marginBottom: 30 }}>
          {children}
        </div>
      )}
    >
      <Box
        component={component}
        className={clsx(styles.variants[variant], className)}
        {...props}
        styles={{
          ...variantExtraStyles[variant],
          ...props.styles,
        }}
      >
        {children}
      </Box>
    </ConditionalWrap>
  )
}

Text.variants = Object.keys(styleRefs.variants)
