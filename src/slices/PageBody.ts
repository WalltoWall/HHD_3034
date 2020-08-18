/**
 * Root Prismic slices file where Page Body slices are registered for use in the
 * page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'
import * as R from 'rambdax'

// 1. Import your slice
import * as PageBodyFooter from './PageBodyFooter'
import * as PageBodyHeader from './PageBodyHeader'
import * as PageBodyDogSlideshow from './PageBodyDogSlideshow'
import * as PageBodyProductList from './PageBodyProductList'
import * as PageBodyLocations from './PageBodyLocations'
import * as PageBodyAboutHankS from './PageBodyAboutHankS'
import * as PageBodyText from './PageBodyText'
import * as PageBodyImage from './PageBodyImage'

// 2. Add your slice
const slices = {
  PageBodyFooter,
  PageBodyHeader,
  PageBodyDogSlideshow,
  PageBodyProductList,
  PageBodyLocations,
  PageBodyAboutHankS,
  PageBodyText,
  PageBodyImage,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesPageBody on PrismicPageBodySlicesType {
    ...PageBodyDogSlideshow
    ...PageBodyProductList
    ...PageBodyLocations
    ...PageBodyAboutHankS
    ...PageBodyText
    ...PageBodyImage

    # The following slices do not have fragments:
    #...PageBodyFooter
    #...PageBodyHeader
  }
`

export const slicesMap = R.map((module) => {
  const component: typeof module.default & {
    mapDataToProps?: any
    mapDataToContext?: any
  } = module.default
  if ('mapDataToProps' in module)
    component.mapDataToProps = module.mapDataToProps
  if ('mapDataToContext' in module)
    component.mapDataToContext = module.mapDataToContext
  return component
}, slices)
