import * as React from 'react'
import { graphql } from 'gatsby'
import { getRichText } from '@walltowall/helpers'
import { Box } from '@walltowall/calico'

import { PageBodyTextFragment } from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

export type PageBodyTextProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyText = ({
  textHTML,
  previousIsHeader,
  nextSharesBg,
}: PageBodyTextProps) => (
  <BoundedBox
    component="section"
    nextSharesBg={nextSharesBg}
    innerMaxWidth="large"
    styles={{
      color: 'gray30',
      marginTop: previousIsHeader ? [null, -25, -30, -40] : undefined,
    }}
  >
    <Box styles={{ display: 'flex' }}>
      <Box
        styles={{
          display: ['none', 'block'],
          width: [null, previousIsHeader ? '5.5/12' : '2/12'],
          flexShrink: 0,
          marginRight: [null, 6],
        }}
      />
      <HTMLContent
        html={textHTML}
        componentOverrides={{
          p: (Comp) => (props) => (
            <Comp
              variant="sansCond-16"
              {...props}
              styles={{ letterSpacing: 'xs', textTransform: 'uppercase' }}
            />
          ),
        }}
        styles={{ flexGrow: 1 }}
      />
    </Box>
  </BoundedBox>
)

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyTextFragment, typeof mapDataToContext>) => ({
  textHTML: getRichText(data?.primary?.text),
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyText on PrismicPageBodyText {
    primary {
      text {
        text
        html
      }
    }
  }
`

export default PageBodyText
