import React from 'react'
import styled from 'styled-components'
import ContentLoader from 'react-content-loader'

// f3f3f3
// ecebeb

const SIZE = 20
export const ItemLoader = () => (
  <>
    <List height={SIZE + 2} width={200} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
      <rect x="0" y="0" rx="2" ry="2" width="100%" height={SIZE} />
    </List>
    <List height={SIZE + 8} width={200} speed={2} primaryColor="#f2f2f3" secondaryColor="#ecebeb">
      <rect x="0" y="0" rx="2" ry="2" width="100%" height={SIZE} />
    </List>
  </>
)

const List = styled(ContentLoader)`
  position: relative;
`
