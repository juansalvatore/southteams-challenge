import React, { useState } from 'react'
import styled from 'styled-components'

export const App = () => {
  const [number, setNumber] = useState(0)
  return (
    <AppWrapper>
      <Header className="App-header">{number}</Header>
      <button type="button" onClick={() => setNumber(number + 1)}>
        add
      </button>
    </AppWrapper>
  )
}

const Header = styled.header`
  color: ${({ theme }) => theme.colors.cBlue};
`

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  height: 100%;
  width: 100%;
`
