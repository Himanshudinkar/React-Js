import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

function Axios(){
    let [apidata, setApidata] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res.data);
            setApidata(res.data)
        })
    },[])

    let finaldata = apidata.map((e,index)=> {return <tr> <td key={index}>{e.id}</td> <td key={index}>{e.title}</td>  </tr> })

    return(
        <>
        <table border="">
      <thead>
        <th>ID</th>
        <th>TITLE</th>
       
      </thead>
      <tbody>
        
            {finaldata}
        
      </tbody>
      </table>
        </>
    )
}

export default Axios