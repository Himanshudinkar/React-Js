import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Axiostask = () =>{

    let [apidata,setApidata] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res=>{
            console.log(res.data)
            setApidata(res.data)
        })
    },[])

    let final = apidata.map((e,index)=>{return <tr> <td  key={index}>{e.id}</td>  <td key={index}>{e.thumbnailUrl}</td> </tr>})
    return(
        <>
        <table border="">
            <thead>
                <th>ID</th>
                <th>URL</th>
              
            </thead>
            <tbody>
                {final}
            </tbody>
        </table>
        </>
    )
}

export default Axiostask