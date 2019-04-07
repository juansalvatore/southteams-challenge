import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,
  body {
    width: 100%;
    min-height: 100%;
    font-family: 'Nunito', sans-serif;
    padding: 0;
    margin: 0;
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

  input[type=text], textarea, button[type=submit]:focus {
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
  }
  

  input[type=text]:focus, textarea:focus, button[type=submit]:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }

  button[name=delete] {
    outline: none;
  }

  button[name=delete]:focus {
    filter: contrast(1%);
  }
`
