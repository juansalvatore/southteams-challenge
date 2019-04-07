import React, { useState, Suspense } from 'react'
import styled, { css } from 'styled-components'
import { useStateWithLocalStorage } from './SupermarketList.hooks'
import { Button } from '../ui/Buttons'
import { List } from '../components'
import { ItemsCounter, H3 } from '../ui/Typography/Headings.styled'

const Modal = React.lazy(() => import('../ui/Modal'))

export const SupermarketList = () => {
  const [items, addItem, removeItem, isListLoading] = useStateWithLocalStorage()
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <SupermarketListWrapper isModalOpen={isModalOpen}>
      {isModalOpen && (
        <Suspense fallback={<div />}>
          <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} items={items} addItem={addItem} />
        </Suspense>
      )}

      <SupermarketListContainer>
        <H3 bold center>
          Supermarket List
        </H3>
        <ItemsCounter center>{items.length} items</ItemsCounter>
        {!isListLoading && <List items={items} addItem={addItem} removeItem={removeItem} />}
        <Button
          primary
          onClick={() => {
            setModalOpen(true)
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
