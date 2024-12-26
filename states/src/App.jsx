import { useState } from "react"
import Task from "./task"
import Photo from "./photo"
import Compo from "./Component1"
import Theme from "./Theme"
import Useeffect from "./Effect"


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
  
  function inner(){
    let a = document.querySelector('#output')
    a.innerHTML = `Himanshu`;
  }

  return (
    <>
       <h6 id="output"></h6>
       <button onClick={inner}>Inner</button>
      <h1>{count}</h1>
      <button onClick={add}>Increment</button>
       <button onClick={dic}>Decrement</button>

       <Task />
       <Photo />
       <Compo/>
       <Theme name = {"Himanshu"}/>
       <Useeffect/>
    </>
  )
}

export default App
