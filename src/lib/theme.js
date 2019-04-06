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
  md: '1.25rem',
  lg: '1.5rem' /* 24px */,
  xl: '2rem' /* 32px */,
  xxl: '3rem' /* 48px */,
  xxxl: '4.5rem' /* 72px */,
}

export const theme = {}

theme.colors = {
  cWhite: 'rgb(255, 255, 255)',
  cBlack: 'rgb(1, 1, 1)',
  lightGray: 'rgb(246, 246, 246)', // global background color
  gray: 'rgb(150, 147, 151)',
  primary: 'rgb(18, 168, 255)', // button blue color
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
