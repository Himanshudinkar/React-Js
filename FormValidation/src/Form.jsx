import { useState } from "react"

const Form = () =>{

    let [inputname,setInput] = useState({
        name:'',
        email:'',
        mobile:'',
        address:'',
        city:''
    })

    function hinput(event){
        let {name,value} = event.target;

        setInput({
            ...inputname,
            [name]:value

        })
    }

    const finalSubmit =(event) =>{
        event.preventDefault();

        console.log(inputname)

    }

    return(
        <>
        <form onSubmit={finalSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={inputname.name} onChange={hinput}/> <br />
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={inputname.email} onChange={hinput}/> <br />
            <label htmlFor="">Mobile</label>
            <input type="text" name="mobile" value={inputname.mobile} onChange={hinput}/> <br />
            <label htmlFor="">Address</label>
            <input type="text" name="address" value={inputname.address} onChange={hinput}/> <br />
            <label htmlFor="">City</label>
            <input type="text" name="city" value={inputname.city} onChange={hinput}/> <br />
            <input type="submit"  />
        </form>
        
        </>
    )
}

export default Form