import { useState } from "react"
import Task from "./task"
import Photo from "./photo"

function App() {

  let [count, setcounter] = useState(0)

  function add(){
    setcounter(count+1)
  }

  function dic(){
    if(count >0)
    {
    setcounter(count-1)
    }
  }
  

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>Increment</button>
       <button onClick={dic}>Decrement</button>

       <Task />
       <Photo />
    </>
  )
}

export default App
