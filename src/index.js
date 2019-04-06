import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { theme } from './lib/theme'
import { GlobalStyles } from './lib/GlobalStyles'

ReactDOM.render(
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </div>,
  document.getElementById('root')
)
