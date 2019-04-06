import { css } from 'styled-components'

const breakpoint = {
  xs: '0px',
  sm: '576px',
  md: '1024px',
  lg: '1280px',
  xl: '1920px',
}

const fontSize = {
  xxs: '0.625rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1.15rem',
  lg: '1.5rem' /* 24px */,
  xl: '2rem' /* 32px */,
  xxl: '3rem' /* 48px */,
  xxxl: '4.5rem' /* 72px */,
}

export const theme = {}

theme.colors = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(1, 1, 1)',
  bgGray: 'rgb(246, 246, 246)', // global background color
  gray: 'rgb(150, 147, 151)',
  buttonGray: 'rgb(204, 204, 204)',
  borderGray: 'rgb(204, 204, 204)', // secondary button gray border color
  primary: 'rgb(18, 168, 255)', // primary button background blue color
  borderPrimary: 'rgb(15, 134, 204)', // primary button border color
  textGray: 'rgb(148, 148, 148)',
}

theme.fontSize = {
  ...fontSize,
}

export const device = Object.keys(breakpoint).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media screen and (max-width: ${breakpoint[key]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})
