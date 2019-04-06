import React from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import Theme from './Theme'
import { Typography } from './Typography'

const stories = storiesOf('Theme', module)

stories.add('Colors / Font Sizes', () => {
  return <Theme />
})

stories.add('Typography', () => {
  return <Typography />
})
