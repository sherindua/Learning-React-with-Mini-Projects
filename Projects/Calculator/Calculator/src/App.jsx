import "bootstrap/dist/css/bootstrap.min.css";
import "./App.module.css";
import Display from "./Display";
import KeyContainer from "./KeyContainer";
import Keys from "./Keys";
import { useState } from "react";
function App() {
  let [displayText, setDisplayText] = useState("");

  function HandleOnClick(event) {
    console.log(event);
    let keyPressed = event.target.innerText;
    if (keyPressed === "=") {
      let result = eval(displayText);
      console.log(result);
      setDisplayText(result);
    } else if (keyPressed === "C") {
      setDisplayText("");
    } else {
      setDisplayText(displayText + keyPressed);
    }
  }
  return (
    <>
      <KeyContainer>
        <Display displayText={displayText}></Display>
        <Keys HandleOnClick={HandleOnClick} />
      </KeyContainer>
    </>
  );
}

export default App;
