import React from 'react'
import faker from 'faker'

import { Anchor } from './Anchor'
import { Text } from './Text'

export default {
  title: 'Design System/Anchor',
  component: Anchor,
}

export const Default = () => (
  <Text>
    <Anchor href="#">{faker.lorem.words(20)}</Anchor>
  </Text>
)
