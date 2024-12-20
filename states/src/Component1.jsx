import { useState } from "react";


function Compo(){

    let [show, setShow] = useState(false)


    return(
        <>

        <button onClick={()=>setShow(!show)}>

            {(show) ? "Hide" : "Display"}
            
        </button>
        
        {(show) ? <h2>Success</h2> : ""}

        </>
    )
}

export default Compo