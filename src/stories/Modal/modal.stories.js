import React from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import { Modal } from '../../ui'

const stories = storiesOf('UI/Modal', module)

stories.add('Default', () => {
  return <Modal>test</Modal>
})
