import { useState } from "react";

function Theme(props) {
  let [change, setchange] = useState(false);

  let backgroundColor = change ? "black" : "white";

  return (
    <>
      <h1>{props.name}</h1>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: backgroundColor,
        }}
      ></div>

      <button onClick={() => setchange(!change)}>
        {change ? "Light" : "Dark"}
      </button>
    </>
  );
}

export default Theme;
