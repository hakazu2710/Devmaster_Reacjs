import React from "react";

import "./App.css";
import IStudent from "./components/IStudent";
import FuncListStudent from "./components/FuncListStudent";

import EventClass1 from "./components/EventClass1";
import EventForm1 from "./components/EventForm1";
import EventForm2 from "./components/EventForm2";
import EventForm3 from "./components/EventForm3";
import Func_Comp1 from "./components/Func_Comp1";

function App() {
  const mockData: IStudent[] = [
    { id: 1, name: "Nguyễn Văn A", age: 18 },
    { id: 2, name: "Trần Thị B" }, // không có age => dùng giá trị undefined
    { id: 3, name: "Lê Văn C", age: 22 },
    { id: 4, name: "Phạm Thị D", age: 20 },
    { id: 5, name: "Hoàng Văn E", age: 19 },
  ];

  // handleSubmit
  const handleSumit = (data: IStudent) => {
    mockData.push(data);
  };

  return (
    <div className="container border">
      <div>
        <img
          src="https://devmaster.edu.vn/images/logo.png"
          alt="devmaster academy"
        />
        <hr />
      </div>

      <FuncListStudent students={mockData} />
      <h2>Event</h2>
      <Func_Comp1 />
      <hr />
      <EventClass1 />
      <hr />
      <EventForm1 />
      <hr />
      <EventForm2 onSubmit={handleSumit} />
      <hr />
      <EventForm3 />
    </div>
  );
}

export default App;
