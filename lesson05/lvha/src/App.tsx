import React from "react";
import logo from "./logo.svg";

import "./App.css";
import UseStateDemo from "./component/UseStateDemo";
import UseEffectDemo from "./component/UseEffectDemo";
import ExampleContext from "./component/ExampleContext";
import PostList from "./component/PostList";
import Counter from "./component/Counter";
import Lab5 from "./component/Lab5";
import Lab1 from "./component/Lab1";
import InputFocus from "./component/InputFocus";
import ConfirmExit from "./component/ConfirmExit";

function App() {
  return (
    <div className="container border">
      <img
        src="https://devmaster.edu.vn/images/logo.png"
        alt="devmaster academy"
      />
      <h1>Làm việc với React Hook</h1>
      <hr />
      <UseStateDemo />
      <UseEffectDemo />

      <ExampleContext />
      <hr />
      <PostList />

      <Lab1 />

      <InputFocus />
      <Counter />
      <Lab5 />
      <ConfirmExit />
    </div>
  );
}

export default App;
