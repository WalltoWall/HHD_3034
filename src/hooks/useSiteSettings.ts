import { useStaticQuery, graphql } from 'gatsby'

import { PrismicSiteSettingsQuery } from '../graphqlTypes'

const YEAR = new Date().getFullYear().toString()

export const useSiteSettings = () => {
  const queryData = useStaticQuery<PrismicSiteSettingsQuery>(graphql`
    query PrismicSiteSettings {
      prismicSettings {
        data {
          site_name {
            text
          }
          site_description {
            text
          }
          site_copyright {
            text
          }
          facebook_handle {
            text
          }
          twitter_handle {
            text
          }
          instagram_handle {
            text
          }
          footer_hours {
            text
          }
          online_order_link {
            url
          }
          uber_eats_link {
            url
          }
          doordash_link {
            url
          }
          mailing_list_subscription_link {
            url
          }
        }
      }
    }
  `)

  const settings = queryData.prismicSettings?.data

  return {
    siteName: settings?.site_name?.text,
    siteDescription: settings?.site_description?.text,
    siteCopyright: settings?.site_copyright?.text?.replace?.(/\$YEAR/g, YEAR),
    facebookHandle: settings?.facebook_handle?.text,
    twitterHandle: settings?.twitter_handle?.text,
    instagramHandle: settings?.instagram_handle?.text,
    footerHours: settings?.footer_hours?.text,
    onlineOrderHref: settings?.online_order_link?.url,
    uberEatsHref: settings?.uber_eats_link?.url,
    doordashHref: settings?.doordash_link?.url,
    mailingListSubscriptionLink: settings?.mailing_list_subscription_link?.url,
  }
}
