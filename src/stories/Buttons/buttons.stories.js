import React from 'react'
// eslint-disable-next-line
import { storiesOf } from '@storybook/react'
import { Button } from '../../ui/Buttons'

const stories = storiesOf('UI/Button', module)

stories.add('Primary', () => {
  return <Button primary>Primary Button</Button>
})

stories.add('Secondary', () => {
  return <Button secondary>Add</Button>
})

stories.add('Empty', () => {
  return <Button empty>Cancel</Button>
})
