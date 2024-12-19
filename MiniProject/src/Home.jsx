import { useState } from "react"

const Home = () =>{

    let [h, setH] = useState(false)

    let p = ""

    if(h)
    {
       p = <h1>Hello React Website</h1>
    }
    else
    {
        p = ""
    }


    return(
        <>

        <div className="backimg"> 
          <button onClick={()=> setH(!h)}>HELLO</button>
          {p}
        </div>

        </>
    )
}
export default Home