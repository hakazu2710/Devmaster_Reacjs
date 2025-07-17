import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JSXExpression from "./components/JSXExpression";
import FuncComp from "./components/FuncComp";
import FuncComp1 from "./components/FuncComp1";
import Func_Hvt_x from "./components/Func_Hvt_x";
import Func_test from "./components/Func_test";
import Func_link from "./components/Func_link";
import FuncComp2 from "./components/FuncComp2";
import ClassComp from "./components/ClassComp";
import ClassComp1 from "./components/ClassComp1";
import ClassComp2 from "./components/ClassComp2";
import FuncComp3 from "./components/FuncComp3";
import FuncListMember from "./components/FuncListMember";
import ClassMember from "./components/ClassMember";
import StudentList from "./components/StudentList";
import IStudent from "./components/IStudent";

function App() {
  const member = {
    path: "https://devmaster.edu.vn/images/logo.png",
    name: "HVT",
    age: 23,
  };

  const objectstudent = {
    name: "HA",
    age: 22,
    email: "levuhoanganh081@gmail.com",
  };

  // lớp giao diện đối tượng sinh viên

  // Mock data
  const students: IStudent[] = [
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Le Thi B", age: 22 },
    { id: 3, name: "Tran Van C", age: 21 },
  ];
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
      <hr />
      <Func_link info={member} add="25 Vũ ngoc phan" />
      <hr />
      <FuncComp2 />
      <FuncComp2 fullname="HA" age="22" email="levuhoanganh081@gmail.com" />
      <FuncComp3 student={objectstudent} />
      <hr />
      <ClassComp studentName="HA" />
      <ClassComp1 name="HA" age={22} />

      <hr />
      <ClassComp2 student={objectstudent} />

      <hr />
      <FuncListMember />
      <ClassMember />
      <hr />
      <StudentList students={students} />
    </div>
  );
}

export default App;
