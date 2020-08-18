import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@walltowall/calico'
import GatsbyImage from 'gatsby-image'

import { PageBodyImageFragment } from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'

export type PageBodyImageProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyImage = ({
  imageAlt,
  imageFluid,
  previousIsHeader,
  nextSharesBg,
}: PageBodyImageProps) => (
  <BoundedBox
    component="section"
    nextSharesBg={nextSharesBg}
    innerMaxWidth="large"
    styles={{
      color: 'gray30',
      marginTop: previousIsHeader ? [null, -30, -40, -48] : undefined,
      marginRight: [null, null, null, -10],
    }}
  >
    <Box styles={{ display: 'flex' }}>
      <Box
        styles={{
          display: ['none', 'block'],
          width: [null, previousIsHeader ? '5/12' : '2/12'],
          flexShrink: 0,
          marginRight: [null, 6],
        }}
      />
      <Box styles={{ flexGrow: 1 }}>
        {imageFluid && <GatsbyImage fluid={imageFluid} alt={imageAlt} />}
      </Box>
    </Box>
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyImageFragment, typeof mapDataToContext>) => ({
  imageAlt: data.primary?.image?.alt,
  imageFluid: data.primary?.image?.fluid,
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyImage on PrismicPageBodyImage {
    primary {
      image {
        alt
        fluid(maxWidth: 800) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`

export default PageBodyImage
