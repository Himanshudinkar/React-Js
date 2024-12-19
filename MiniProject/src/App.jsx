import './App.css'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contect from './Contect'
import { Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element = {<Layout />}>
      <Route index element = {<Home/>}/>
      <Route path='/about' element = {<About/>} />
      <Route path='/contect' element = {<Contect/>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
