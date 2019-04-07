import React from 'react'
import styled from 'styled-components'

export const Input = props => {
  return <InputStyled {...props} />
}

const InputStyled = styled.input.attrs({ type: 'text' })`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.md};
`
