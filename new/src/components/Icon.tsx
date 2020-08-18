import * as React from 'react'
import { Box, BoxProps, useBoxStyles } from '@walltowall/calico'

import { ReactComponent as AssetIconTwitterSVG } from '../assets/icon-twitter.svg'
import { ReactComponent as AssetIconInstagramSVG } from '../assets/icon-instagram.svg'
import { ReactComponent as AssetIconFacebookSVG } from '../assets/icon-facebook.svg'

const icons = {
  twitter: { svg: AssetIconTwitterSVG, x: 1, y: 1 },
  instagram: { svg: AssetIconInstagramSVG, x: 1, y: 1 },
  facebook: { svg: AssetIconFacebookSVG, x: 1, y: 1 },
}

export type IconProps = {
  name: keyof typeof icons
} & BoxProps

export const Icon = ({ name, ...props }: IconProps) => {
  const icon = icons[name]
  const Comp = icon.svg

  const svgClassName = useBoxStyles({ display: 'block' })

  return (
    <Box {...props}>
      <Comp className={svgClassName} />
    </Box>
  )
}
