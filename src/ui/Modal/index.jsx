import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Buttons'
import { Input } from '../Inputs'
import { H4 } from '../Typography/Headings.styled'
import { capitalizeFirstLetter } from '../../utils'
import { device } from '../../lib/theme'

const Modal = ({ isModalOpen, setModalOpen, items, addItem }) => {
  const [itemText, setItemText] = useState('')
  const [addItemError, setItemError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const parsedNewItem = capitalizeFirstLetter(itemText.trim().toLowerCase())
    const isRepeated = items.filter(item => item === parsedNewItem).length !== 0

    if (isRepeated) {
      setItemError('This item is already on the list 😱')
    } else if (parsedNewItem !== '') {
      addItem(parsedNewItem)
      setModalOpen(false)
    }
  }

  return (
    <ModalWrapper>
      <ModalCard onSubmit={handleSubmit}>
        <Title center>Add item</Title>
        <Input
          value={itemText}
          onChange={e => {
            setItemText(e.target.value)
            setItemError('')
          }}
          isModalOpen={isModalOpen}
        />
        <ErrorMessage>{addItemError}</ErrorMessage>
        <ButtonContainer>
          <Cancel empty onClick={() => setModalOpen(false)}>
            Cancel
          </Cancel>
          <Add secondary type="submit">
            Add
          </Add>
        </ButtonContainer>
      </ModalCard>
    </ModalWrapper>
  )
}

export default Modal

const Cancel = styled(Button)`
  ${device.sm`
    // display: none;
    width: 100%;
  `}
`

const Add = styled(Button)`
  ${device.sm`
    width: 100%;
  `}
`

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(148, 148, 148, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  width: 450px;
  border-radius: 10px;
  padding: 45px 45px 45px 45px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
`

const Title = styled(H4)`
  margin-bottom: 1.3rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  ${device.sm`
    flex-direction: column;
    align-items: space-between;
    height: 100px;
  `}
`

const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.xs}
  text-align: right;
  margin-top: 5px;
`
