import React from 'react'
import styled from 'styled-components'
import { capitalizeFirstLetter } from '../../utils'

export const Item = ({ children }) => {
  return (
    <ItemWrapper>
      {capitalizeFirstLetter(children)}
      <button type="button" onClick={() => alert(children)}>
        delete
      </button>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  padding: 18px 20px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`
