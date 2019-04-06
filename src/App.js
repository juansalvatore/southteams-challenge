import React, { useState } from 'react'

export const App = () => {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <header className="App-header">{number}</header>
      <button type="button" onClick={() => setNumber(number + 1)}>
        add
      </button>
    </div>
  )
}
