import React from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import { Item } from '../../ui'

const stories = storiesOf('UI/Item', module)

stories.add('Default', () => {
  return (
    <div style={{ padding: 20 }}>
      <Item>test</Item>
    </div>
  )
})
