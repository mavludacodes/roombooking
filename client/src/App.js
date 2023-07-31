import { useState, useEffect } from "react";

// import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";

function App() {
  // const [state, setState] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setState(20);
  //   }, 2000);
  // }, [state]);

  return (
    <div>
      {/* <>hii</>
      <p onClick={(e) => setState(state + 1)}>{state} hello</p> */}
      <Home />
    </div>
  );
}

export default App;
