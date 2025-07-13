import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JSXExpression from "./components/JSXExpression";
import FuncComp from "./components/FuncComp";
import FuncComp1 from "./components/FuncComp1";
import Func_Hvt_x from "./components/Func_Hvt_x";
import Func_test from "./components/Func_test";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <JSXExpression />
      <hr />
      <h2 className="alert alert-success">Component</h2>
      <FuncComp />
      <FuncComp name="HA" company="Devmaster student" />
      <FuncComp1 name="HA" company="DEV" />
      <Func_Hvt_x name="HA" age="22" />
      <Func_test name="HA" company="22" />
    </div>
  );
}

export default App;
