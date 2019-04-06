import React from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import { Item } from '../../ui/Items'

const stories = storiesOf('UI/Item', module)

stories.add('Removable Item', () => {
  return (
    <div style={{ padding: 20 }}>
      <Item />
    </div>
  )
})
