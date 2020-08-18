import * as React from 'react'
import { Box, BoxProps } from '@walltowall/calico'

import { LinkProps, Link } from './Link'
import { Text } from './Text'

type ButtonLinkProps = {
  href: LinkProps['href']
  linkProps?: Omit<LinkProps, 'href'>
  children?: React.ReactNode
} & BoxProps

export const ButtonLink = ({
  href,
  linkProps,
  children,
  ...props
}: ButtonLinkProps) => (
  <Link href={href} {...linkProps}>
    <Box
      {...props}
      styles={{
        backgroundColor: 'red40',
        color: 'white',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 5,
        paddingRight: 5,
        ...props.styles,
      }}
    >
      <Text
        variant="sansCond-16"
        styles={{ letterSpacing: 'xs', textTransform: 'uppercase' }}
      >
        {children}
      </Text>
    </Box>
  </Link>
)
