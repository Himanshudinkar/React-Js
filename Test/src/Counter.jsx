import { useState } from "react"

const Counter = () =>{

    let [count, setcounter] = useState(0)

  function add(){

    setcounter(count+5)
  }

  function dic(){

    if(count >0)
    {
    setcounter(count-5)
    }
  }
  
  
    return(
        <>
        <div className="cont">
        <h1>{count}</h1>
        <button onClick={add}>Increment</button>
        <button onClick={dic}>Decrement</button>
        </div>
        </>
    )
}

export default Counter