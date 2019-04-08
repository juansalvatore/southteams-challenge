import styled, { css } from 'styled-components'
import { device } from '../../lib/theme'

const possibleTextTransform = ['capitalize', 'lowercase', 'uppercase']
const possibleFontWeight = ['bold', 'bolder', 'lighter', 'normal']
const possibleTextAlign = ['center', 'left', 'right']

export const textMixin = props => css`
  ${Object.keys(props).reduce((fields, property) => {
    if (possibleTextTransform.includes(property)) {
      return [...fields, `text-transform: ${property};`]
    }

    if (possibleTextAlign.includes(property)) {
      return [...fields, `text-align: ${property};`]
    }

    if (possibleFontWeight.includes(property)) {
      return [...fields, `font-weight: ${property};`]
    }

    return fields
  }, [])}
`

export const ItemsCounter = styled.p`
  ${textMixin};
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textGray};
  font-weight: 700;
`

export const H1 = styled.h1`
  ${textMixin};
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.xxxl}; /* 72px */
  line-height: ${({ theme }) => theme.fontSize.xxxl}; /* 72px */
  letter-spacing: 0;
  margin-top: 24px;
  margin-bottom: 24px;

  ${device.md`
    font-size: 2.5rem; /* 40px */
    line-height: 2.875rem; /* 46px */
    letter-spacing: 0.3px;
    margin-top: 16px;
    margin-bottom: 16px;
  `}
`

export const H2 = styled.h2`
  ${textMixin};
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.xxl}; /* 48px */
  line-height: calc(${({ theme }) => theme.fontSize.xxl} + 0.375rem); /* 54px */
  letter-spacing: 0;
  margin-top: 16px;
  margin-bottom: 16px;

  ${device.md`
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.3px;
  `}
`

export const H3 = styled.h3`
  ${textMixin};
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.xl}; /* 32px */
  line-height: calc(${({ theme }) => theme.fontSize.md}); /* 40px */
  letter-spacing: 0.3px;
  margin-top: 16px;
  margin-bottom: 16px;

  ${device.md`
    font-size: 1.8rem; /* 24px */
    line-height: 2rem; /* 32px */
    margin-top: 8px;
    margin-bottom: 8px;
  `}
`

export const H4 = styled.h4`
  ${textMixin};
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.lg}; /* 24px */
  line-height: ${({ theme }) => theme.fontSize.xl}; /* 32px */
  letter-spacing: 0.3px;
  margin-top: 8px;
  margin-bottom: 8px;

  ${device.md`
    font-size: 1.313rem; /* 21px */
    line-height: 1.813rem; /* 29px */
  `}
`

export const H5 = styled.h5`
  ${textMixin};
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.md}; /* 21px */
  line-height: ${({ theme }) => theme.fontSize.lg}; /* 29px */
  letter-spacing: 0.3px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const H6 = styled.h6`
  ${textMixin};
  color: inherit;
  font-size: ${({ theme }) => theme.fontSize.sm}; /* 16px */
  line-height: ${({ theme }) => theme.fontSize.md}; /* 20px */
  letter-spacing: 0.3px;
  margin-top: 8px;
  margin-bottom: 8px;
`
