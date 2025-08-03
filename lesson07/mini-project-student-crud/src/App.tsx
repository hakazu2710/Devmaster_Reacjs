import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Control from "./components/Control";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import IStudent from "./IStudent";

function App() {
  // quản lý trạng thái form show/hide => state: isform
  const [isform, setisform] = useState(false);

  // mock data
  const studentsInit: IStudent[] = [
    {
      studentId: "1",
      studentName: "Nguyễn Văn A",
      studentAge: 20,
      gender: true,
      birthDay: new Date("2005-06-15"),
      address: "123 Lê Lợi, Quận 1, TP.HCM",
      isActive: true,
    },
    {
      studentId: "2",
      studentName: "Trần Thị B",
      studentAge: 21,
      gender: false,
      birthDay: new Date("2004-09-20"),
      address: "456 Hai Bà Trưng, Quận 3, TP.HCM",
      isActive: false,
    },
    {
      studentId: "3",
      studentName: "Lê Minh C",
      studentAge: 22,
      gender: true,
      birthDay: new Date("2003-12-01"),
      address: "789 Nguyễn Huệ, Quận 1, TP.HCM",
      isActive: true,
    },
  ];

  // tổ chức dữ liệu của ứng dụng trong State: studens
  const [studens, setstudents] = useState<IStudent[]>(studentsInit);
  // 1. render => students vào component (studentList)

  // 2. Hàm xử lý sự kiện khi nhấn thêm mới  trên components (Control)
  const handleAdd = () => {
    setisform(true); // hiển thị form
    // Câpj nhật nút submit theo trạng thái nút lệnh xử lý => actionName
    setactionName("Add");
    // cập nhật dữ liệu để chuyển lên form
    setselectStudent(null);
  };
  // 3. Hàm xử lý sự kiện xem
  const handleView = (student: IStudent) => {
    setisform(true);
    // Câpj nhật nút submit theo trạng thái nút lệnh xử lý => actionName
    setactionName("View");
    console.log("Từ view(onView): ", student);
    // cập nhật dữ liệu để chuyển lên form
    setselectStudent(student);
  };

  // 4. state: actionName => để quản lý trạng thái: xem, thêm, sửa
  const [actionName, setactionName] = useState("");

  //5. Close form
  const handleClose = () => {
    setisform(false);
  };

  // 6. Quản lý dữ liệu form
  const [selectStudent, setselectStudent] = useState<IStudent | null>(null);

  return (
    <section className="container-fluid">
      <Header />
      <section className="container mt-4">
        <div className="row my-2">
          <div className="col-12 col-md border">
            <Control onAdd={handleAdd} />
            <hr />
            <StudentList renStudents={studens} onViewStudent={handleView} />
          </div>
          {/* <div
            className="col-12 col-md-5 border ms-0 mt-2  ms-sm-2  mt-sm-0 is-form"
            id="frmForm"
          > */}
          <div
            className={`col-12 col-md-5 border ms-0 mt-2  ms-sm-2  mt-sm-0 is-form ${
              isform === true ? " show" : ""
            }`}
          >
            <StudentForm
              renderActionName={actionName}
              onClose={handleClose}
              renderSelectStudent={selectStudent}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
