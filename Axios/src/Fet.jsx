import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Fet = () =>{

    let [jsondata,setJsondata] = useState([])

    let [frminp,setFrminp] = useState({
        name:'',
        age:'',
        contact:'',
        city:''
    })

    const changeinp =(event) =>{
        const {name,value} = event.target;
        setFrminp({
            ...frminp,
            [name]:value
        })
    }

    const submitFinal = (event) =>{
        event.preventDefault()
        axios.post("http://localhost:3000/student",frminp)
        .then(rei=>alert("inserted"))
    }

    const mydel = (id) =>{
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(re=>alert("deleted"))
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/student")
       .then(res=>{
        console.log(res.data);
        setJsondata(res.data)
       })

    },[mydel])

    let final = jsondata.map((e,index)=>{return <>
    <tr key={index}> 
        <td >{e.id}</td> 
        <td >{e.name}</td> 
        <td >{e.age}</td> 
        <td >{e.contact}</td> 
        <td >{e.city}</td> 
        <td > <button onClick={()=>mydel(e.id)}> Delete</button> </td>
    </tr>
    </>
    })

    return(
        <>
        <table border="">
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>CONTACT</th>
                <th>CITY</th>
                <th>DELETE</th>
            </thead>
            <tbody>
                {final}
            </tbody>
        </table>

        <form onSubmit={submitFinal}>
            <label htmlFor="">Name</label>
            <input type="text" name="name"    value={frminp.name} onChange={changeinp}/>  <br />

             <label htmlFor="">Age</label>
            <input type="text" name="age"   value={frminp.age} onChange={changeinp}/>  <br />

             <label htmlFor="">Contact</label>
            <input type="text" name="contact"   value={frminp.contact} onChange={changeinp}/>  <br />

             <label htmlFor="">City</label>
            <input type="text" name="city"   value={frminp.city} onChange={changeinp}/>  <br />

            <input type="submit"  />
        </form>
        </>
    )
}

export default Fet