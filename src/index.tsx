import * as React from "react";
import { render } from "react-dom";
import useToggle from './custom-hook.tsx';

import "./styles.css";

function App() {
  const [state, setState] = useToggle();
  console.log(state);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setState(false)}>toggle</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
