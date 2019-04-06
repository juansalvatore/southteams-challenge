import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../ui/Buttons'
import { List } from '../components'
import { ItemsCounter, H3 } from '../ui/Typography/Headings.styled'

export const SupermarketList = () => {
  const [id, setId] = useState(0)
  const [items, setItems] = useState([])

  return (
    <SupermarketListWrapper>
      <SupermarketListContainer>
        <H3 bold center>
          Supermarket List
        </H3>
        <ItemsCounter center>{items.length} items</ItemsCounter>
        <List items={items} />
        <Button
          primary
          onClick={() => {
            setItems([
              ...items,
              {
                id,
                title: 'test',
              },
            ])
            setId(id + 1)
          }}
        >
          Add item
        </Button>
      </SupermarketListContainer>
    </SupermarketListWrapper>
  )
}

const SupermarketListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgGray};
  position: absolute;
  height: 100%;
  width: 100%;
`

const SupermarketListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px 0 20px;
`
