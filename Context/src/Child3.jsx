import { createContext } from "react"
import { cdata } from "./App"
import Child4 from "./Child4";

  let userdata = createContext();
  let finaldata = "Hello Everyone My Name is Himanshu Dinkar"
  let udata = 1234567
const Child3 = () =>{

  
    return(
        <>
        
        <cdata.Consumer>
            {
                (data) =>{
                    return(
                        <h1>Wish You all Happy {data}</h1>
                    )
                }
            }
        </cdata.Consumer>

        <userdata.Provider value={{finaldata,udata}}>
            <Child4/>
        </userdata.Provider>
        

        </>
    )
}

export default Child3
export {userdata}