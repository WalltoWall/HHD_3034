import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'
import GatsbyImage from 'gatsby-image'
import { Box } from '@walltowall/calico'

import { PageBodyAboutHankSFragment } from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { Columns } from '../components/Columns'
import { HTMLContent } from '../components/HTMLContent'

export type PageBodyAboutHankSProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyAboutHankS = ({
  textHTML,
  sideImages = [],
  nextSharesBg,
}: PageBodyAboutHankSProps) => (
  <BoundedBox
    component="section"
    nextSharesBg={nextSharesBg}
    innerMaxWidth="large"
    styles={{ color: 'gray30' }}
  >
    <Box styles={{ display: 'flex' }}>
      <Box
        styles={{
          display: ['none', 'block'],
          width: '4/12',
          flexShrink: 0,
          marginRight: [null, 6],
        }}
      >
        {sideImages.map(
          (image) =>
            image.fluid && <GatsbyImage fluid={image.fluid} alt={image.alt} />,
        )}
      </Box>
      <Box
        styles={{
          backgroundColor: 'red40',
          color: 'beige70',
          padding: [6, 10],
        }}
      >
        {textHTML && (
          <HTMLContent
            html={textHTML}
            componentOverrides={{
              p: (Comp) => (props) => <Comp variant="sans-14" {...props} />,
            }}
          />
        )}
      </Box>
    </Box>
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyAboutHankSFragment,
  typeof mapDataToContext
>) => ({
  textHTML: getRichText(data.primary?.text),
  sideImages: data.items?.map?.((item) => ({
    alt: item?.side_image?.alt,
    fluid: item?.side_image?.fluid,
  })),
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyAboutHankS on PrismicPageBodyAboutHankS {
    primary {
      text {
        text
        html
      }
    }
    items {
      side_image {
        alt
        fluid(maxWidth: 400) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`

export default PageBodyAboutHankS
