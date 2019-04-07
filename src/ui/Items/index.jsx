import React from 'react'
import styled from 'styled-components'
import trash from '../../static/Trash.svg'

export const Item = ({ children, removeItem }) => {
  return (
    <ItemWrapper>
      <ItemName>{children}</ItemName>
      <button name="delete" type="button" onClick={() => removeItem(children)}>
        <Can src={trash} alt="delete" />
      </button>
    </ItemWrapper>
  )
}

const Can = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  :hover {
    filter: contrast(50%);
  }
`

const ItemName = styled.span`
  max-width: 400px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ItemWrapper = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 18px 20px;
  font-size: ${({ theme }) => theme.fontSize.md};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`
