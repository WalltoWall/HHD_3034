import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getRichText } from '@walltowall/helpers'
import { useKeenSlider } from 'keen-slider/react'
import { Box, BoxProps } from '@walltowall/calico'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import {
  PageBodyDogSlideshowImagesQuery,
  PageBodyDogSlideshowFragment,
} from '../graphqlTypes'
import { MapDataToPropsArgs } from '../types'
import { PageTemplateEnhancerProps } from '../templates/page'
import { useInterval } from '../hooks/useInterval'

import { BoundedBox } from '../components/BoundedBox'
import { HTMLContent } from '../components/HTMLContent'

import 'keen-slider/keen-slider.min.css'

const SLIDE_DURATION = 6000 // ms

const useQueryData = () =>
  useStaticQuery<PageBodyDogSlideshowImagesQuery>(graphql`
    query PageBodyDogSlideshowImages {
      oohlala: file(relativePath: { eq: "texture-oohlala.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      doggystyle: file(relativePath: { eq: "texture-doggystyle.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

type SliderProps = {
  children?: React.ReactNode
} & BoxProps

const Slider = ({ children, ...props }: SliderProps) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    dragStart: () => stopInterval(),
    dragEnd: () => restartInterval(),
  })

  const [stopInterval, restartInterval] = useInterval(() => {
    slider.next()
  }, SLIDE_DURATION)

  return (
    <Box ref={sliderRef} className="keen-slider" {...props}>
      {children}
    </Box>
  )
}

export type PageBodyDogSlideshowProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyDogSlideshow = ({
  textHTML,
  children,
  nextSharesBg,
  previousIsHeader,
}: PageBodyDogSlideshowProps) => {
  const queryData = useQueryData()
  const imageFluidOohlala = queryData.oohlala?.childImageSharp?.fluid
  const imageFluidDoggystyle = queryData.doggystyle?.childImageSharp?.fluid

  return (
    <BoundedBox
      component="section"
      nextSharesBg={nextSharesBg}
      innerMaxWidth="large"
      styles={{ color: 'gray30' }}
    >
      <Box
        styles={{
          display: 'flex',
          flexDirection: ['column', null, 'rowReverse'],
          alignItems: [null, 'center'],
        }}
      >
        <Box
          styles={{
            marginBottom: [8, null, 0],
            flexGrow: [null, null, 1],
            width: [null, '10/12', 'auto'],
            marginTop: previousIsHeader ? [-15, -30, -40] : undefined,
          }}
        >
          {imageFluidOohlala && (
            <Box
              styles={{
                width: '4/12',
                marginLeft: 'auto',
                marginRight: [-4, null, -8, -12],
              }}
            >
              <GatsbyImage
                fluid={imageFluidOohlala}
                alt="Ooh lala… you'll need two hands for that dog!"
              />
            </Box>
          )}
          <Slider
            styles={{
              position: 'relative',
              zIndex: 1,
              marginLeft: [-6, -8, 0],
              marginRight: [-6, -8, 0],
              marginTop: [-12, -26],
              marginBottom: [-4, -8],
            }}
          >
            {children}
          </Slider>
          {imageFluidDoggystyle && (
            <GatsbyImage fluid={imageFluidDoggystyle} alt="Doggy Style" />
          )}
        </Box>
        {textHTML && (
          <HTMLContent
            html={textHTML}
            componentOverrides={{
              p: (Comp) => (props) => (
                <Comp
                  variant="sansCond-16"
                  {...props}
                  styles={{
                    ...props.styles,
                    textTransform: 'uppercase',
                    letterSpacing: 'xs',
                  }}
                />
              ),
            }}
            styles={{
              width: [null, null, '4/12'],
              marginRight: [null, null, 6],
            }}
          />
        )}
      </Box>
    </BoundedBox>
  )
}

type PageBodyDogSlideshowSlideProps = {
  imageFluid?: FluidObject
  imageAlt?: string
}

const PageBodyDogSlideshowSlide = ({
  imageFluid,
  imageAlt,
}: PageBodyDogSlideshowSlideProps) =>
  imageFluid ? (
    <Box className="keen-slider__slide">
      <Box styles={{ width: [null, '10/12', 'full'] }}>
        <GatsbyImage fluid={imageFluid} alt={imageAlt} />
      </Box>
    </Box>
  ) : null
PageBodyDogSlideshow.Slide = PageBodyDogSlideshowSlide

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<
  PageBodyDogSlideshowFragment,
  typeof mapDataToContext
>) => ({
  textHTML: getRichText(data?.primary?.text),
  children: data.items?.map?.((item) => (
    <PageBodyDogSlideshow.Slide
      key={item?.image?.fluid?.src}
      imageFluid={item?.image?.fluid}
      imageAlt={item?.image?.alt}
    />
  )),
})

export const mapDataToContext = () => ({
  bg: 'transparent',
})

export const fragment = graphql`
  fragment PageBodyDogSlideshow on PrismicPageBodyDogSlideshow {
    primary {
      text {
        text
        html
      }
    }
    items {
      image {
        alt
        fluid(maxWidth: 600) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`

export default PageBodyDogSlideshow
