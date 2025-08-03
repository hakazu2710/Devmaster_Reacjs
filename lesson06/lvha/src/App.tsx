import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Control from "./Components/Control";
import StudentList from "./Components/StudentList";
import StudentForm from "./Components/StudentForm";
import IStudent from "./Components/IStudent";

function App() {
  const mockData: IStudent[] = [
    { id: 1, code: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: 2, code: "SV002", name: "Trần Thị B", age: 21, gender: "Nữ" },
  ];

  return (
    <section className="container-fluid">
      <Header />
      <section className="container mt-4">
        <div className="row my-2">
          <div className="col-12 col-md border">
            <Control />
            <hr />
            <StudentList students={mockData} />
          </div>
          <div
            className="col-md-5 col-12 border ms-0 mt-2  ms-sm-2  mt-sm-0"
            id="frmForm"
          >
            <StudentForm />
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
