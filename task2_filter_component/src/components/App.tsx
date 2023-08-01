"use client";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>React Show/Hide Example</h1>
      <button onClick={handleClick}>Show/Hide</button>
      {/* Use a ternary operator to assign the className based on the show value */}
      <p className={show ? "" : "hidden"}>This is a hidden paragraph</p>
      <p className="">hello</p>
    </div>
  );
}

export default App;
