import React from 'react'
import styled from 'styled-components'
import { capitalizeFirstLetter } from '../../utils'

export const Item = () => {
  return (
    <ItemWrapper>
      {capitalizeFirstLetter('test')}
      <button type="button" onClick={() => alert('deleted')}>
        delete
      </button>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 18px 20px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`
