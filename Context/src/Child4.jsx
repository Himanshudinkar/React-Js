import { useContext } from "react"
import { userdata } from "./Child3"
import { createContext } from "react"
import Child5 from "./Child5";

let data6 = createContext();
let name = "Himanshu Dinkar Cybrom";
let a = 23;

const Child4 = () =>{

    let {finaldata , age} = useContext(userdata)
    
    return(
       
        <>
       <h6>{finaldata} or {age}</h6>

       <data6.Provider value={{name,a}}>
        <Child5 />
       </data6.Provider>
        </>


    )
}

export default Child4
export {data6}