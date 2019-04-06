import React from 'react'
import styled from 'styled-components'
import { H1, H2, H3, H4, H5, H6 } from '../../ui/Typography/Headings.styled'

export const Typography = () => {
  return (
    <div style={{}}>
      <Header>
        <h2>Font size</h2>
        <List>
          <li>All font sizes are based on rem. 1rem equals 16px</li>
        </List>
      </Header>
      <div style={{ color: '#818A91', fontWeight: 100, marginLeft: '20px' }}>
        <div>{`import {H1, H2, H3, H4, H5, H6} from '~/components/ui/Typography/Headings.styled'`}</div>
        <div>{`<H1>H1</H1>`}</div>
        <div>{`<H1 capitalize/lowercase/uppercase>H1</H1>`}</div>
        <div>{`<H1 bold/bolder/lighter/normal>H1</H1>`}</div>
      </div>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '2px 20px',
          marginTop: '30px',
          color: '#2B2B2B',
        }}
      >
        <H1>Header 1</H1>
        <H2>Header 2</H2>
        <H3>Header 3</H3>
        <H4>Header 4</H4>
        <H5>Header 5</H5>
        <H6>Header 6</H6>
      </div>
    </div>
  )
}

const Header = styled.div`
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
