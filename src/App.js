import React, { useState } from 'react'
//import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
//import Search from './components/Search'


//const items = [
//  {
//    title: 'What is React?',
//    content: 'React is a front end javascript framework'
//  },
//  {
//    title: 'Why use React?',
//    content: 'React is a favortite JS library among engineers.'
//  },
//  {
//    title: 'How do you see React?',
//    content: 'You use React by creating components.'
//  }
//]

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
  const [selected, setSelected] = useState(options[0])
  return (
    <div style={{ margin: "10px 20px" }}>

      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div >
  )
}

export default App


