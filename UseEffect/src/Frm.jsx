import { useState } from "react"

const Frm = () =>{
    let [h,setH] = useState('')

    let [n,setN] = useState('')

    function hinput(event){

        console.log(event.target.value);

        setH(event.target.value);
    }

     function ninput(event){

        console.log(event.target.value);

        setN(event.target.value)
    }

    let a = h

    function st(){
       let a = h;
    }

    

    return(
        <>
        <h1>My Name {h}</h1>
        <input type="text" onChange={hinput} />
        <button onClick={st}>submit</button>
        <h1>{a}</h1>
        <h2>Number {n}</h2>
        <input type="number" onChange={ninput} />
        
        </>
    )
}

export default Frm