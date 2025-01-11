import { useState } from "react"
import Login from "./Login"

const Frm = () =>{
    let [inputname,setInput] = useState(
        {
            name :'',
            email: '',
            mobile : ''
        }
    )

    let [status, setStatus] = useState(false)

 

    const  hinput =(event) => {
        let {name,value} = event.target
        setInput(
            {
                ...inputname,
                [name]:value
            }
        )
    }

    const finalSubmit = (event) =>{
        event.preventDefault()

        if(inputname.name === '')
        {
            alert("pls enter name")
            
        }
        else if(inputname.email === '')
        {
            alert("pls enter email")
        }
        else if(inputname.mobile === '')
        {
            alert("pls enter mobile number")
        }

        localStorage.setItem('usrdata',JSON.stringify(inputname))
        setStatus(true)

         
    }

    if(status)
    {
        return <Login />
    }

    return(
        <>
        <form onSubmit={finalSubmit}>
            <p>{message}</p>
        <input type="text" name="name" value={inputname.name} placeholder="Enter Name" onChange={hinput} /> <br />
        <input type="email" name="email" value={inputname.email} placeholder="Enter Email" onChange={hinput}/> <br />
        <input type="tel" name="mobile" value={inputname.mobile} placeholder="Enter Mobile No." onChange={hinput} /> <br />
        <input type="submit" />
        </form>
        </>
        
    )
}
export default Frm