import { useContext } from "react"
import { data6 } from "./Child4"

const Child6 = () =>{

    let {name,a} = useContext(data6)
    return(
        <>
        <h1>{name} or {a}</h1>
        </>
    )
}
export default Child6