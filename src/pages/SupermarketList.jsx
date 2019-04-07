import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useStateWithLocalStorage } from './SupermarketList.hooks'
import { Button } from '../ui/Buttons'
import { List } from '../components'
import { ItemsCounter, H3 } from '../ui/Typography/Headings.styled'
import { Modal } from '../ui/Modal'

export const SupermarketList = () => {
  const [items, setItems] = useStateWithLocalStorage('items')
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <SupermarketListWrapper isModalOpen={isModalOpen}>
      {isModalOpen && <Modal setModalOpen={setModalOpen} setItems={setItems} />}
      <SupermarketListContainer>
        <H3 bold center>
          Supermarket List
        </H3>
        <ItemsCounter center>{items.length} items</ItemsCounter>
        <List items={items} />
        <Button primary onClick={() => setModalOpen(true)}>
          Add item
        </Button>
      </SupermarketListContainer>
    </SupermarketListWrapper>
  )
}

const SupermarketListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgGray};
  position: absolute;
  width: 100%;
  min-height: 100%;

  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      overflow-y: hidden;
      height: 100%;
    `}
`

const SupermarketListContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 40px 20px;
`
