import { useState } from "react"

const Filter = () =>{

    let arr = [22,11,23,4,6,19,43,18,12]

    let arrfil = arr.filter((e) => {return e > 18  })

    let product = ["puma","nike","puma","addidas","puma","zoodio","dmart"]

    let productfill = product.filter((e)=> {return e == "puma"})

    let compoproduct = productfill.map((e,index) => {return <h1 key={index}>{e}</h1>}) 

    let [change, setChange] = useState("200px")

    function coll()
    {
        setChange(change = "700px")
    }
 
    return(
        <>
        <ul>
            {
                arrfil.map((e,index) => {return <li key={index}>{e}</li>})
            }
        </ul>

        <h1> <h1>{compoproduct}</h1></h1> 

        <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="" style={{height:change}} />
        <button onClick={coll}>Change</button>   
        </>
    )
}

export default Filter