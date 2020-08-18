import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

import { PageBodyLocationsFragment } from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { Columns } from '../components/Columns'
import { Inline } from '../components/Inline'
import { Heading } from '../components/Heading'
import { Anchor } from '../components/Anchor'
import { Text } from '../components/Text'
import { ButtonLink } from '../components/ButtonLink'

export type PageBodyLocationsProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyLocations = ({
  children,
  nextSharesBg,
}: PageBodyLocationsProps) => (
  <BoundedBox
    component="section"
    nextSharesBg={nextSharesBg}
    innerMaxWidth="large"
    styles={{ color: 'gray30' }}
  >
    <Columns variant="list" count={1} space={12}>
      {children}
    </Columns>
  </BoundedBox>
)

type MetadataItemProps = {
  title?: string
  children?: React.ReactNode
}

const MetadataItem = ({ title, children }: MetadataItemProps) => (
  <Box>
    {title && (
      <Heading variant="sansA" styles={{ color: 'red40', marginBottom: 4 }}>
        {title}
      </Heading>
    )}
    {children && <Box>{children}</Box>}
  </Box>
)

const variants = {
  imageLeft: {
    flexDirection: 'row',
    imageTransform: 'rotateNeg4deg',
  },
  imageRight: {
    flexDirection: 'rowReverse',
    imageTransform: 'rotate4deg',
  },
} as const

type PageBodyLocationsLocationProps = {
  variant?: keyof typeof variants
  title?: string
  imageFluid?: FluidObject
  imageAlt?: string
  addressHTML?: string
  addressHref?: string
  phoneNumber?: string
  emailAddress?: string
  hoursHTML?: string
  jobsHref?: string
}

const PageBodyLocationsLocation = ({
  variant: variantName = 'imageLeft',
  title,
  imageFluid,
  imageAlt,
  addressHTML,
  addressHref,
  phoneNumber,
  emailAddress,
  hoursHTML,
  jobsHref,
}: PageBodyLocationsLocationProps) => {
  const variant = variants[variantName]

  return (
    <Box
      styles={{
        display: 'flex',
        flexDirection: ['column', variant.flexDirection],
        alignItems: ['center', 'start'],
      }}
    >
      <Box
        styles={{
          marginBottom: [8, 0],
          width: ['8/12', '5/12'],
          flexShrink: 0,
          transform: variant.imageTransform,
          maxWidth: ['15rem', 'none'],
        }}
      >
        {imageFluid && <GatsbyImage fluid={imageFluid} alt={imageAlt} />}
      </Box>
      <Inline
        space={10}
        styles={{
          flexGrow: 1,
          paddingTop: [null, 12],
          marginLeft: [null, 12],
          marginRight: [null, 12],
        }}
      >
        {addressHTML && (
          <MetadataItem title={title}>
            <HTMLContent html={addressHTML} />
            {phoneNumber && (
              <Text component="p" styles={{ marginTop: 4 }}>
                {phoneNumber}
              </Text>
            )}
            {addressHref && (
              <Text component="p" styles={{ marginTop: 4 }}>
                <Anchor href={addressHref}>View in Google Maps</Anchor>
              </Text>
            )}
          </MetadataItem>
        )}
        {hoursHTML && (
          <MetadataItem title="Hours">
            <HTMLContent html={hoursHTML} />
          </MetadataItem>
        )}
        {emailAddress && (
          <MetadataItem title="Email">
            <Text component="p">
              <Anchor href="">{emailAddress}</Anchor>
            </Text>
          </MetadataItem>
        )}
        {jobsHref && (
          <MetadataItem title="Jobs">
            <ButtonLink href={jobsHref}>Download an application</ButtonLink>
          </MetadataItem>
        )}
      </Inline>
    </Box>
  )
}
PageBodyLocations.Location = PageBodyLocationsLocation

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyLocationsFragment, typeof mapDataToContext>) => ({
  children: data.items?.map?.((item, index) => {
    const location = item?.location?.document
    return (
      <PageBodyLocations.Location
        key={location?.data?.title?.text}
        variant={index % 2 ? 'imageRight' : 'imageLeft'}
        title={location?.data?.title?.text}
        imageFluid={location?.data?.image?.fluid}
        imageAlt={location?.data?.image?.alt}
        addressHTML={getRichText(location?.data?.address)}
        addressHref={location?.data?.address_link?.url}
        phoneNumber={location?.data?.phone_number?.text}
        emailAddress={location?.data?.email_address?.text}
        hoursHTML={getRichText(location?.data?.hours)}
        jobsHref={location?.data?.jobs_link?.url}
      />
    )
  }),
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyLocations on PrismicPageBodyLocations {
    items {
      location {
        document {
          ... on PrismicLocation {
            data {
              title {
                text
              }
              address {
                text
                html
              }
              address_link {
                url
              }
              phone_number {
                text
              }
              email_address {
                text
              }
              hours {
                text
                html
              }
              jobs_link {
                url
              }
              image {
                alt
                fluid(maxWidth: 600) {
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

export default PageBodyLocations
