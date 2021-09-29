import React, { useState } from 'react'
//import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
//import Search from './components/Search'
import Translate from './components/Translate'


const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

const App = () => {
  return (
    <div style={{ margin: "10px 20px" }}>
      <Translate />
    </div >
  )
}

export default App


