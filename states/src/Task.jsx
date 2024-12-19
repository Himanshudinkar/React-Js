import { useState } from "react"

const Task = () =>

    
{

    let [colors, setcolorChange] = useState("pink")

    function cl(){
        setcolorChange(colors="green")
    }

    function cl2(){
        setcolorChange(colors="red")
    }

     function cl3(){
        setcolorChange(colors="blue")
    }


    return(

        <>
        
        <div style={{height:"100vh", width:"100vw",border:"1px solid black",backgroundColor:colors}}>
            
        </div>
        <button onClick={cl}>GREEN</button>
        <button onClick={cl2}>RED</button>
        <button onClick={cl3}>BLUE</button>
        
        </>
    )
}   

export default Task