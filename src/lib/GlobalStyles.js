import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,
  body {
    width: 100%;
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    /* background-color: ${theme.colors.lightGray}; */

  }

  * {
    box-sizing: border-box;
  }
  
  strong {
    font-weight: bold;
  }

  button {
    padding: 0;
    border: none;
    background: none;
  }

  ul, ol {
      margin: 0;
      padding: 0;
      list-style:none;
  }
`