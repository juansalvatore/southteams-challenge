import React from 'react'
import styled from 'styled-components'
import { Button } from './ui/Buttons'

export const App = () => {
  return (
    <AppWrapper>
      <Button primary>Add item</Button>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgGray};
  position: absolute;
  height: 100%;
  width: 100%;
`
