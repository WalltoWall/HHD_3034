import { graphql, useStaticQuery } from 'gatsby'

import { UseNavigationQuery } from '../graphqlTypes'

export const useNavigation = () => {
  const queryData = useStaticQuery<UseNavigationQuery>(graphql`
    query UseNavigation {
      header: prismicNavigation(uid: { eq: "header" }) {
        data {
          main {
            ... on PrismicNavigationMainNavItem {
              id
              primary {
                name
                link {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return {
    header: queryData.header?.data?.main,
  }
}
