import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'

function App() {
 

  return (
    <>
      <Routes>

        <Route path="/" element = {<Layout />}>

           <Route index element = {<Home />} />
           <Route path="/about" element={<About />} />

        </Route>

      </Routes>

      

     
    </>
  )
}

export default App
