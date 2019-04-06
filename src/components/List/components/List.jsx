import React from 'react'
import styled from 'styled-components'
import { Item } from '../../../ui/Items'

export const List = ({ items }) => {
  const showItems = () =>
    items.map(({ id, title }) => (
      <Item key={id} id={id}>
        {title}
      </Item>
    ))
  return <ListWrapper>{showItems()}</ListWrapper>
}

const ListWrapper = styled.ul`
  li {
    margin-bottom: 15px;
  }
`
