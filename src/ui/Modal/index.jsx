import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Buttons'
import { Input } from '../Inputs'
import { H4 } from '../Typography/Headings.styled'

export const Modal = ({ setModalOpen, setItems }) => {
  const [itemText, setItemText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (itemText.trim() !== '') {
      setItems(itemText.trim())
      setModalOpen(false)
    }
  }

  return (
    <ModalWrapper>
      <ModalCard onSubmit={handleSubmit}>
        <Title center>Add item</Title>
        <Input value={itemText} onChange={e => setItemText(e.target.value)} />
        <ButtonContainer>
          <Button empty onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button secondary type="submit">
            Add
          </Button>
        </ButtonContainer>
      </ModalCard>
    </ModalWrapper>
  )
}

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
  min-width: 450px;
  border-radius: 10px;
  padding: 45px 45px 45px 45px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
`

const Title = styled(H4)`
  margin-bottom: 1.3rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`
