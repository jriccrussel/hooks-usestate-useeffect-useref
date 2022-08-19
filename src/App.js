import React, { useState } from "react"
import { Accordion } from "./component/accordion"
import { Dropdown } from "./component/dropdown"
import { Search } from "./component/search"
import { Translate } from "./component/translate"

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
]

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
]

const showAccordion = () => {
  if(window.location.pathname === '/'){
    return <Accordion items={items} />
  }
}

const showList = () => {
  if(window.location.pathname === '/list'){
    return <Search />
  }
}

const showDropdown = () => {
  if(window.location.pathname === '/dropdown'){
    return <Dropdown />
  }
}

const showTranslate = () => {
  if(window.location.pathname === '/translate'){
    return <Translate />
  }
}


const App = () => {
  // const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? (
        <Dropdown 
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ): null} */}
      {/* <Translate /> */}

      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  )
}
export default App