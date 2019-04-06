/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../lib/theme'

export default function Theme() {
  const showColors = () => {
    const colors = []
    for (var colorName in theme.colors) {
      colors.push(
        <ColorWrapper>
          <Color color={theme.colors[colorName]} />
          <ColorName>{colorName}</ColorName>
          <ColorHash>{theme.colors[colorName]}</ColorHash>
        </ColorWrapper>
      )
    }
    return colors
  }

  const showFontSizes = () => {
    const fontSizes = []
    for (var fontSize in theme.fontSize) {
      fontSizes.push(
        <Text fontSize={theme.fontSize[fontSize]}>
          {fontSize}: {theme.fontSize[fontSize]}
        </Text>
      )
    }
    return fontSizes
  }
  return (
    <>
      <Header>
        <h2>Colors</h2>
        <List>
          <li>basic colors (primary, accent, text, icon, divider,shadow)</li>
          <li>auxiliary colors (disabled, warning, danger, success, info, black, white, gray...)</li>
        </List>
      </Header>
      <Colors>{showColors()}</Colors>
      <br />
      <Header>
        <h2>Font size</h2>
        <List>
          <li>All font sizes are based on rem. 1rem equals 16px</li>
        </List>
      </Header>
      <FontSizes>{showFontSizes()}</FontSizes>
    </>
  )
}

const FontSizes = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
`

const Text = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  color: #757575;
  font-weight: 200;
  margin-bottom: 10px;
`

const Header = styled.div`
  margin-left: 20px;

  h2 {
    color: #373a3c;
    font-weight: 200;
  }
`
const List = styled.ul`
  margin-bottom: 40px;
  margin-left: 20px;
  color: #818a91;

  li {
    margin-bottom: 10px;
  }
`

const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 20px;
`

const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 100%;
  grid-gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
`

const ColorName = styled.div`
  font-weight: 600;
  color: #373a3c;
  margin-bottom: 5px;
`

const ColorHash = styled.div`
  color: #6e767f;
  font-weight: 100;
  font-size: 18px;
`

const ColorWrapper = styled.div`
  text-align: center;
`
