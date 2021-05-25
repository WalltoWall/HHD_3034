import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { Box } from '@walltowall/calico'
import { isPathActiveExact } from '@walltowall/helpers'

import { HeaderQuery } from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'
import { useNavigation } from '../hooks/useNavigation'
import { useSiteSettings } from '../hooks/useSiteSettings'

import { BoundedBox } from '../components/BoundedBox'
import { Icon } from '../components/Icon'
import { Inline } from '../components/Inline'
import { Link } from '../components/Link'
import { Text } from '../components/Text'

import * as styleRefs from './PageBodyHeader.treat'

const useQueryData = () =>
  useStaticQuery<HeaderQuery>(graphql`
    query Header {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      menuActive: file(relativePath: { eq: "texture-menu-active.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

export type PageBodyHeaderProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

type NavItemProps = {
  href: string
  children: React.ReactNode
  location: Location
}

const NavItem = ({ href, children, location }: NavItemProps) => {
  const queryData = useQueryData()
  const imageFluid = queryData.menuActive?.childImageSharp?.fluid

  const isActive = isPathActiveExact(href, location)

  return (
    <Box
      styles={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        height: ['4.5rem', '5.5rem'],
      }}
    >
      {imageFluid && (
        <Box
          styles={{
            position: 'absolute',
            top: '6/12',
            right: 0,
            bottom: 0,
            left: '6/12',
            height: ['4.5rem', '5.5rem'],
            width: ['4.5rem', '5.5rem'],
            transform: 'offsetForCentering',
            opacity: isActive ? 100 : 0,
            transitionProperty: 'opacity',
            transitionTimingFunction: 'easeOut',
            transitionDuration: 'normal',
          }}
        >
          <GatsbyImage fluid={imageFluid} imgStyle={{ objectFit: 'contain' }} />
        </Box>
      )}
      <Link href={href}>
        <Text
          variant="sansCond-20-30"
          styles={{
            textTransform: 'uppercase',
            letterSpacing: 's',
            position: 'relative',
          }}
        >
          {children}
        </Text>
      </Link>
    </Box>
  )
}

const PageBodyHeader = ({ nextSharesBg, location }: PageBodyHeaderProps) => {
  const queryData = useQueryData()
  const imageFluid = queryData.logo?.childImageSharp?.fluid

  const siteSettings = useSiteSettings()
  const navigation = useNavigation()

  return (
    <BoundedBox
      component="header"
      innerMaxWidth="large"
      nextSharesBg={nextSharesBg}
      styles={{ paddingTop: 0, color: 'gray30' }}
    >
      <Box
        styles={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'start'],
        }}
      >
        {imageFluid && (
          <Box
            styles={{
              width: ['10rem', '5/12'],
              flexShrink: 0,
              marginBottom: [2, 19],
              marginRight: [0, 12],
            }}
          >
            <Link href="/">
              <GatsbyImage fluid={imageFluid} alt="Hank's Hawaii" />
            </Link>
          </Box>
        )}
        <Box styles={{ flexGrow: 1, paddingTop: [0, 6] }}>
          <Box
            styles={{
              display: 'flex',
              flexDirection: ['column', 'columnReverse'],
              alignItems: ['center', 'end'],
              marginBottom: 2,
            }}
          >
            <Box component="nav" styles={{ marginBottom: [2, 0] }}>
              <Inline
                variant="list"
                space={[5, null, null, 6]}
                wrap={false}
                alignY="center"
              >
                {navigation.header?.map?.(
                  (item) =>
                    item?.primary?.link?.url &&
                    item?.primary?.name && (
                      <NavItem
                        key={item?.id}
                        href={item.primary.link.url}
                        location={location}
                      >
                        {item.primary.name}
                      </NavItem>
                    ),
                )}
                {siteSettings.onlineOrderHref && (
                  <Link href={siteSettings.onlineOrderHref}>
                    <Box
                      styles={{
                        backgroundColor: 'red40',
                        color: 'white',
                        padding: 3,
                      }}
                    >
                      <Text
                        variant="sansCond-20-30"
                        className={styleRefs.letterSpacingOffsetFix}
                        styles={{
                          textTransform: 'uppercase',
                          letterSpacing: 's',
                          position: 'relative',
                        }}
                      >
                        Order
                      </Text>
                    </Box>
                  </Link>
                )}
              </Inline>
            </Box>
            <Box component="nav" styles={{ color: 'red40' }}>
              <Inline
                space={6}
                direction={['column', 'row']}
                spaceY={4}
                align="center"
                alignY="center"
              >
                <Inline variant="list" space={6} wrap={false} alignY="center">
                  {siteSettings.uberEatsHref && (
                    <Link href={siteSettings.uberEatsHref}>
                      <Icon name="uberEats" styles={{ width: '5.5rem' }} />
                    </Link>
                  )}
                  {siteSettings.doordashHref && (
                    <Link href={siteSettings.doordashHref}>
                      <Icon name="doordash" styles={{ width: '7rem' }} />
                    </Link>
                  )}
                </Inline>
                <Inline variant="list" space={6} wrap={false} alignY="center">
                  {siteSettings.facebookHandle && (
                    <Link
                      href={`https://www.facebook.com/${siteSettings.facebookHandle}`}
                    >
                      <Icon name="facebook" styles={{ width: '1.5rem' }} />
                    </Link>
                  )}
                  {siteSettings.twitterHandle && (
                    <Link
                      href={`https://twitter.com/${siteSettings.twitterHandle}`}
                    >
                      <Icon name="twitter" styles={{ width: '1.5rem' }} />
                    </Link>
                  )}
                  {siteSettings.instagramHandle && (
                    <Link
                      href={`https://instagram.com/${siteSettings.instagramHandle}`}
                    >
                      <Icon name="instagram" styles={{ width: '1.5rem' }} />
                    </Link>
                  )}
                </Inline>
              </Inline>
            </Box>
          </Box>
        </Box>
      </Box>
    </BoundedBox>
  )
}

export const mapDataToProps = ({ meta }: MapDataToPropsArgs) => ({
  location: meta!.location,
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export default PageBodyHeader
