import { useState } from "react"

const Form = () =>{
    let [inputname, setInput] = useState(

        {
            username:'',
            address:'',
            city:'',
            mobile:''
        }
    )


    const hinput = (event) =>{
        const {name,value} = event.target;
        // console.log(event.target.value)

        setInput({
            ...inputname,
            [name]:value
        })
    }

    const finalSubmit = (event) =>{
        event.preventDefault();
        console.log(inputname)
    }

    return(
        <>
        
        <form onSubmit={finalSubmit} style={{marginTop:"30px"}}>
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={inputname.username} onChange={hinput}/> <br />

            <label htmlFor="">Address</label>
            <input type="text" name="address" value={inputname.address} onChange={hinput}/> <br />

            <label htmlFor="">City</label>
            <input type="text" name="city" value={inputname.city} onChange={hinput}/> <br />

            <label htmlFor="">Mobile</label>
            <input type="text" name="mobile" value={inputname.mobile} onChange={hinput}/> <br />

            <input type="submit"  />
        </form>
        </>
    )

}

export default Form