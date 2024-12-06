//inline css me double curly breses ka use karna hota he style attribute ke sath me
//ex- style = {{backgoroundColor : "red",color:"white"}}, yha css camle case me hoti he

// internal css ko object bana ke apply kiya jata he or bolte he ise internal as a object
// koi bhi self container tag hota he jese <br> to yha jsx me <b /> close karna pdega 
import './App.css'

import Nav  from './assets/navbar'

function App(){

let st ={
  backgroundColor:"yellow",
  color : "blue"
}

  return(
    <>

    <Nav />

    <h1 style={{backgroundColor:"white",color:"red"}}>welcome to the React</h1>
    <h2 style={st}>Lorem ipsum dolor sit amet consectetur.</h2>
    <h1 className="head1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem</h1>

    </>
  )
}

export default App