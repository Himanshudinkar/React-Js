import { useState,useEffect } from "react";
function Useeffect() {
  let [col, setcol] = useState("blue");

 useEffect(()=>{
    alert("Changed....!!")
 } , [col])
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: col }}>
      <button
        onClick={() => {
          setcol("green");
        }}
      >
        Lavender
      </button>
      <button
        onClick={() => {
          setcol("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setcol("pink");
        }}
      >
        Pink
      </button>
    </div>
  );
}
export default Useeffect