import * as React from "react";
import { render } from "react-dom";
import useToggle from './custom-hook.tsx';

import "./styles.css";

function App() {
  const [state, setState] = useToggle();
  return (
    <div className="App">
      <h1>useToggle Custom Hook</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Toggle state: {state}</h3>
      <button onClick={() => setState(false)}>toggle</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
