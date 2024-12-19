import Child2 from "./Child2"

const Child1 = (props) =>{
    return(
        <>
        <h1>{props.Name}</h1>

        <Child2 fname = {props.Name} lastname = {"Dinkar"}/>
        </>
    )
}

export default Child1

