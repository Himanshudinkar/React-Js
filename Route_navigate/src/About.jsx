import { useNavigate, useParams } from "react-router-dom"

const About = () =>{
    let {name,age} = useParams()
    console.log(name)
   let nav = useNavigate()

    function contectpage(){
        nav('/Contect')
    }
    return(
        <>
        <h1>About</h1>
        <h1>my name is {name} and age {age}</h1>
        <button onClick={contectpage}>Contect</button>
        </>
    )
}

export default About