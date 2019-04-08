import React from 'react'
import styled, { css } from 'styled-components'

export const Button = props => {
  const { children } = props
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export const colorMixin = props => css`
  ${Object.keys(props).reduce((fields, property) => {
    switch (property) {
      case 'primary':
        return [
          ...fields,
          `
            color: ${props.theme.colors.white};
            background-color: ${props.theme.colors.primary};
            border: 1px solid ${props.theme.colors.borderPrimary};
            width: 100%;
          `,
        ]
      case 'secondary':
        return [
          ...fields,
          `
            color: ${props.theme.colors.white};
            background-color: ${props.theme.colors.buttonGray};
          `,
        ]
      case 'empty':
        return [
          ...fields,
          `
            color: ${props.theme.colors.black};
            background-color: ${props.theme.colors.white};
            border: 1px solid ${props.theme.colors.borderGray};
          `,
        ]
      default:
        return fields
    }
  }, [])}
`

const ButtonStyled = styled.button.attrs({ type: 'button' })`
  min-width: 100px;
  ${colorMixin}; /* This should go below width so that it has precedence over it */
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`
