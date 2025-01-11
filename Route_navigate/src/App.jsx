import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Contect from "./Contect"


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element = {<Navbar />}>
        <Route index element = {<Home />} />
        <Route path="/about/:name/:age" element = {<About />} />
        <Route path="/contect" element = {<Contect />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
