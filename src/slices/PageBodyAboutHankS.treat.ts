import { style } from 'treat'

import AssetTextureRedPaper from '../assets/texture-red-paper.png'

export const backgroundTextureRedPaper = style({
  backgroundImage: `url(${AssetTextureRedPaper})`,
})

export const transformClipsUp = style({
  transform: 'translateY(-75%)',
})

export const paperShadow = style({
  boxShadow: '0 4px 12px rgba(66,49,50,.8), 0 1px 4px rgba(66,49,50,.5)',
})

export const tiltRight = style({
  transform: 'rotate(4deg)',
})

export const tiltLeft = style({
  transform: 'rotate(-4deg)',
})
