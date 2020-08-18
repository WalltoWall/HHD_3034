import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '@walltowall/calico'

import { PageTemplateEnhancerProps } from '../templates/page'
import { LocationsQuery } from '../graphqlTypes'

import { Anchor } from '../components/Anchor'
import { BoundedBox } from '../components/BoundedBox'
import { Inline } from '../components/Inline'
import { Text } from '../components/Text'

export type PageBodyFooter = PageTemplateEnhancerProps

type LocationDetailsProps = {
  name?: string
  address?: string
  addressHref?: string
  phoneNumber?: string
}

const LocationDetails = ({
  name,
  address,
  addressHref,
  phoneNumber,
}: LocationDetailsProps) => (
  <Inline space={3} spaceY={1} align="center">
    {name && <Box styles={{ color: 'red40', fontWeight: 'bold' }}>{name}</Box>}
    {address && (
      <Box styles={{ color: 'red40' }}>
        {addressHref ? <Anchor href={addressHref}>{address}</Anchor> : address}
      </Box>
    )}
    {phoneNumber && <Box>{phoneNumber}</Box>}
  </Inline>
)

const PageBodyFooter = ({ nextSharesBg }: PageBodyFooter) => {
  const locationsData = useStaticQuery<LocationsQuery>(graphql`
    query Locations {
      allPrismicLocation {
        nodes {
          id
          data {
            title {
              text
            }
            address {
              text
            }
            address_link {
              url
            }
            phone_number {
              text
            }
          }
        }
      }
    }
  `)
  const locations = locationsData.allPrismicLocation.nodes

  return (
    <BoundedBox
      component="footer"
      innerMaxWidth="large"
      nextSharesBg={nextSharesBg}
      styles={{
        color: 'gray30',
        textTransform: 'uppercase',
      }}
    >
      <Text variant="sansCond-13" styles={{ letterSpacing: 'xs' }}>
        <Inline
          variant="list"
          space={6}
          align="center"
          styles={{ marginBottom: 6 }}
        >
          {locations.map((location) => (
            <LocationDetails
              key={location.id}
              name={location.data?.title?.text}
              address={location.data?.address?.text}
              addressHref={location.data?.address_link?.url}
              phoneNumber={location.data?.phone_number?.text}
            />
          ))}
        </Inline>
        <Inline space={6} spaceY={1} align="center">
          <Box component="p">Open 7 Days 11am - 5pm / 6pm Fri- Sun</Box>
          <Anchor href="http://eepurl.com/bo8x8L">
            Subscribe to Our Mailing List
          </Anchor>
          <Box component="p">
            Web Design & Development by{' '}
            <Anchor href="http://www.walltowall.com/">walltowall.com</Anchor>
          </Box>
        </Inline>
      </Text>
    </BoundedBox>
  )
}

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export default PageBodyFooter
