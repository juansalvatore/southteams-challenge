import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/lib/GlobalStyles'
import { theme } from '../src/lib/theme'

addDecorator(storyFn => (
  <div>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    <GlobalStyles />
  </div>
))

const req = require.context('../src/stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
