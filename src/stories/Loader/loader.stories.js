import React from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import { ItemLoader } from '../../ui'

const stories = storiesOf('UI/ItemLoader', module)

stories.add('Default', () => {
  return <ItemLoader />
})
