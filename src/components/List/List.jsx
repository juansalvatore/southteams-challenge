import React from 'react'
import styled from 'styled-components'
import { Item } from '../../ui/Items'

export const List = ({ items, setItems, removeItem }) => {
  const showItems = () =>
    items.map(title => (
      <Item key={title} setItems={setItems} removeItem={removeItem}>
        {title}
      </Item>
    ))
  return <ListWrapper>{showItems()}</ListWrapper>
}

const ListWrapper = styled.ul`
  margin-bottom: 30px;

  li {
    margin-bottom: 10px;
  }
`
