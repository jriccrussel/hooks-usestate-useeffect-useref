import React from "react"
import { Accordion } from "./component/accordion"
import { Search } from "./component/search"

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

const App = () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  )
}
export default App