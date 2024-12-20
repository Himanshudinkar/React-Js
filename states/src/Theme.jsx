import { useState } from "react";

function Theme(props){

   let [change, setchange] = useState(false)



   if(change)
   {
    change = "black"
   }
   else
   {
    change = "white"
   }


    return(
        <>

        <h1>{props.name}</h1>
         <div style={{height:"100vh", width:"100vw",backgroundColor:change}}>

        </div>


        <button onClick={()=>setchange(!change)}>
            {(change==="black" ) ? "light" : "Dark"}
        </button>
        
     

        </>
    )
}

export default Theme