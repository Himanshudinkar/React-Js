import './App.css'
import { Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import Counter from './Counter'
import Flow from './Flow'
import Home from './Home'

function App() {


  return (
    <>
      <Routes>
      <Route path='/' element = {<Layout />}>
      
      <Route path='/counter' element = {<Counter/>} />
      <Route path='/flow' element = {<Flow name = {"Himanshu"} age ={23} />}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
