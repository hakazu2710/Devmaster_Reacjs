import React from "react";
import logo from "./logo.svg";

import "./App.css";
import UseStateDemo from "./component/UseStateDemo";
import UseEffectDemo from "./component/UseEffectDemo";
import ExampleContext from "./component/ExampleContext";
import PostList from "./component/PostList";
import Counter from "./component/Counter";
import Lab5 from "./component/Lab5";

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

      <Counter />
      <Lab5 />
    </div>
  );
}

export default App;
