import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { AspectRatio, GatsbyImageContainer } from '@walltowall/siamese'
import { Box, BoxProps, useBoxStyles } from '@walltowall/calico'
import clsx from 'clsx'

import { FramedImageQuery } from '../graphqlTypes'

import * as styleRefs from './FramedImage.treat'

const useQueryData = () =>
  useStaticQuery<FramedImageQuery>(graphql`
    query FramedImage {
      frame1: file(relativePath: { eq: "texture-frame-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      frame2: file(relativePath: { eq: "texture-frame-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      frame3: file(relativePath: { eq: "texture-frame-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

export type FramedImageProps = {
  frame?: 1 | 2 | 3
  fluid?: FluidObject
  alt?: string
  tilt?: 'left' | 'right'
} & BoxProps

export const FramedImage = ({
  frame = 1,
  fluid,
  alt,
  tilt,
  className,
  ...props
}: FramedImageProps) => {
  const queryData = useQueryData()

  // Note that these images are using `!`. They are images from /assets/, so
  // they shouldn't ever be undefined.
  const framesImageFluid = [
    queryData.frame1?.childImageSharp?.fluid!,
    queryData.frame2?.childImageSharp?.fluid!,
    queryData.frame3?.childImageSharp?.fluid!,
  ]
  const frameImageFluid = framesImageFluid[frame]

  const redBackground = useBoxStyles({ backgroundColor: 'red40' })
  const fullWidthHeight = useBoxStyles({ width: 'full', height: 'full' })

  return (
    <Box
      className={clsx(
        tilt === 'left' && styleRefs.tiltLeft,
        tilt === 'right' && styleRefs.tiltRight,
        styleRefs.shadow,
        className,
      )}
      {...props}
      styles={{ position: 'relative', padding: 0.5, ...props.styles }}
    >
      <AspectRatio x={4} y={3} className={redBackground}>
        <GatsbyImageContainer className={fullWidthHeight}>
          {fluid && <GatsbyImage fluid={fluid} alt={alt} />}
        </GatsbyImageContainer>
      </AspectRatio>
      <Box
        styles={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none',
        }}
      >
        <GatsbyImage fluid={frameImageFluid} alt="" />
      </Box>
    </Box>
  )
}
