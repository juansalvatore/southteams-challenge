import React from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import { Input } from '../../ui'

const stories = storiesOf('UI/Input', module)

stories.add('Input', () => {
  return (
    <div style={{ padding: 20 }}>
      <Input />
    </div>
  )
})
