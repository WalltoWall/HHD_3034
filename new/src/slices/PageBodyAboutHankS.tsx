import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getRichText } from '@walltowall/helpers'
import GatsbyImage from 'gatsby-image'
import { Box } from '@walltowall/calico'
import clsx from 'clsx'

import {
  PageBodyAboutHankSFragment,
  PageBodyAboutHankSAssetsQuery,
} from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'
import { Heading } from '../components/Heading'
import VideoDDD from '../assets/video-ddd.mp4'
import VideoManVFood from '../assets/video-man-vs-food.mp4'
import VideoCookingChannel from '../assets/video-cooking-channel.mp4'

import * as styleRefs from './PageBodyAboutHankS.treat'

const useQueryData = () =>
  useStaticQuery<PageBodyAboutHankSAssetsQuery>(graphql`
    query PageBodyAboutHankSAssets {
      backBoard: file(relativePath: { eq: "texture-back-board.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      clip: file(relativePath: { eq: "texture-clip.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

export type PageBodyAboutHankSProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyAboutHankS = ({
  textHTML,
  sideImages = [],
  nextSharesBg,
  previousIsHeader,
}: PageBodyAboutHankSProps) => {
  const queryData = useQueryData()
  const backBoardImageFluid = queryData.backBoard?.childImageSharp?.fluid
  const clipImageFluid = queryData.clip?.childImageSharp?.fluid

  return (
    <BoundedBox
      component="section"
      nextSharesBg={nextSharesBg}
      innerMaxWidth="large"
      styles={{ color: 'gray30' }}
    >
      <Box styles={{ display: 'flex', alignItems: 'start' }}>
        <Box
          styles={{
            display: ['none', 'block'],
            width: '4.5/12',
            flexShrink: 0,
            marginRight: [null, 12],
          }}
        >
          {sideImages.map(
            (image) =>
              image.fluid && (
                <GatsbyImage fluid={image.fluid} alt={image.alt} />
              ),
          )}
        </Box>
        <Box
          className={clsx(
            styleRefs.backgroundTextureRedPaper,
            styleRefs.paperShadow,
          )}
          styles={{
            backgroundColor: 'red40',
            color: 'beige70',
            padding: [7, 10],
            paddingBottom: [15, 18],
            position: 'relative',
            marginTop: previousIsHeader ? [null, -20, -30, -35] : undefined,
            marginRight: [null, null, null, -10],
          }}
        >
          {clipImageFluid && (
            <Box
              className={styleRefs.transformClipsUp}
              styles={{
                display: 'flex',
                justifyContent: 'spaceBetween',
                alignItems: 'end',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                paddingLeft: [6, 9],
                paddingRight: [6, 9],
              }}
            >
              <Box styles={{ width: '2/12' }}>
                <GatsbyImage fluid={clipImageFluid} alt="" />
              </Box>
              <Box styles={{ width: '2/12' }}>
                <GatsbyImage fluid={clipImageFluid} alt="" />
              </Box>
            </Box>
          )}
          {backBoardImageFluid && (
            <Box styles={{ marginBottom: [6, 8] }}>
              <GatsbyImage
                fluid={backBoardImageFluid}
                alt="Hank's - A Hawaii Original"
              />
            </Box>
          )}
          {textHTML && (
            <HTMLContent
              html={textHTML}
              componentOverrides={{
                p: (Comp) => (props) => (
                  <Comp
                    variant="sans-14"
                    {...props}
                    styles={{ fontWeight: 'medium' }}
                  />
                ),
              }}
            />
          )}
          <Heading
            variant="sansC"
            styles={{
              textAlign: 'center',
              color: 'white',
              marginTop: 8,
              marginBottom: 4,
            }}
          >
            Featured on Diners, Drive-Ins, and Dives
          </Heading>
          <Box component="video" controls={true} styles={{ width: 'full' }}>
            <source src={VideoDDD} type="video/mp4" />
          </Box>
          <Heading
            variant="sansC"
            styles={{
              textAlign: 'center',
              color: 'white',
              marginTop: 8,
              marginBottom: 4,
            }}
          >
            Featured on Man v. Food
          </Heading>
          <Box component="video" controls={true} styles={{ width: 'full' }}>
            <source src={VideoManVFood} type="video/mp4" />
          </Box>
          <Heading
            variant="sansC"
            styles={{
              textAlign: 'center',
              color: 'white',
              marginTop: 8,
              marginBottom: 4,
            }}
          >
            Featured on Unique Eats
          </Heading>
          <Box component="video" controls={true} styles={{ width: 'full' }}>
            <source src={VideoCookingChannel} type="video/mp4" />
          </Box>
        </Box>
      </Box>
    </BoundedBox>
  )
}

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
