import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IStudent from "./Component/IStudent";
import DSSV from "./Component/DSSV";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import ListDSSV from "./Component/ListDSSV";

function ClassApp() {
  const students: IStudent[] = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      age: 20,
      gender: "Male",
      add: "Hà Nội",
      email: "nguyenvana@example.com",
      phone: 84901234567,
    },
    {
      id: 2,
      name: "Trần Thị B",
      // không có age và gender
      add: "TP. Hồ Chí Minh",
      email: "tranthib@example.com",
      phone: 84907654321,
    },
    {
      id: 3,
      name: "Lê Văn C",
      age: 22,
      // không có gender
      add: "Đà Nẵng",
      email: "levanc@example.com",
      phone: 84909876543,
    },
    {
      id: 4,
      name: "Phạm Thị D",
      age: 19,
      gender: "Female",
      add: "Cần Thơ",
      email: "phamthid@example.com",
      phone: 84901112233,
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      // không có age
      gender: "Male",
      add: "Hải Phòng",
      email: "hoangvane@example.com",
      phone: 84904455667,
    },
  ];
  // handleSubmit
  const handleSubmit = (data: IStudent) => {
    students.push(data);
  };
  return (
    <div className="conatiner border">
      <div>
        <img
          src="https://devmaster.edu.vn/images/logo.png"
          alt="devmaster academy"
        />
        <hr />
      </div>
      <hr />
      <ListDSSV student={students} />
      <DSSV onSubmit={handleSubmit} />
    </div>
  );
}

export default ClassApp;
