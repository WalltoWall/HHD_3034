import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

import { PageBodyProductListFragment } from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { Columns } from '../components/Columns'

export type PageBodyProductListProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyProductList = ({
  categoryImageFluid,
  categoryImageAlt,
  children,
  nextSharesBg,
}: PageBodyProductListProps) => (
  <BoundedBox
    component="section"
    nextSharesBg={nextSharesBg}
    innerMaxWidth="large"
    styles={{ color: 'gray30' }}
  >
    <Box styles={{ display: 'flex', flexDirection: ['column', 'row'] }}>
      <Box
        styles={{
          width: ['10rem', '2/12'],
          flexShrink: 0,
          alignSelf: ['center', 'start'],
          marginRight: [null, 6],
        }}
      >
        {categoryImageFluid && (
          <GatsbyImage fluid={categoryImageFluid} alt={categoryImageAlt} />
        )}
      </Box>
      <Columns variant="list" space={[4, 6]} count={[2, 3]}>
        {children}
      </Columns>
    </Box>
  </BoundedBox>
)

type PageBodyProductListProductProps = {
  title?: string
  imageFluid?: FluidObject
  imageAlt?: string
  descriptionText?: string
  descriptionHTML?: string
}

const PageBodyProductListProduct = ({
  title,
  imageFluid,
  imageAlt,
  descriptionText,
  descriptionHTML,
}: PageBodyProductListProductProps) => (
  <Box>
    <Box
      styles={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: [2, 4],
        maxWidth: ['15rem', 'none'],
      }}
    >
      {imageFluid && (
        <GatsbyImage
          fluid={imageFluid}
          alt={imageAlt ?? `${title} - ${descriptionText}`}
        />
      )}
    </Box>
    <HTMLContent
      html={descriptionHTML}
      componentOverrides={{
        p: (Comp) => (props) => <Comp variant="sans-12" {...props} />,
      }}
    />
  </Box>
)
PageBodyProductList.Product = PageBodyProductListProduct

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyProductListFragment,
  typeof mapDataToContext
>) => ({
  categoryImageFluid: data.primary?.category_image?.fluid,
  categoryImageAlt: data.primary?.category_image?.alt,
  children: data.items?.map?.((item) => {
    const product = item?.product?.document
    return (
      <PageBodyProductList.Product
        key={product?.uid}
        title={product?.data?.title?.text}
        imageFluid={product?.data?.image?.fluid}
        imageAlt={product?.data?.image?.alt}
        descriptionText={product?.data?.description?.text}
        descriptionHTML={getRichText(product?.data?.description)}
      />
    )
  }),
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyProductList on PrismicPageBodyProductList {
    primary {
      category_image {
        alt
        fluid(maxWidth: 200) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
    items {
      product {
        document {
          ... on PrismicProduct {
            uid
            data {
              title {
                text
              }
              description {
                text
                html
              }
              image {
                alt
                fluid(maxWidth: 400) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PageBodyProductList
