import React, { Component } from "react";
import IStudent from "./IStudent";

interface IProps {
  onSubmit: (data: IStudent) => void;
}
export default class DSSV extends Component<IProps, IStudent> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: 1,
      name: "HA",
      age: 22,
      gender: "male",
      add: "Hà Nội",
      email: "levuhoanganh@gmail.com",
      phone: 84901234567,
    };
  }

  handleChange = (event: any) => {
    // Lấy thành phần và dữ liệu trên form
    let name = event.target.name;
    let val = event.target.value;
    const parsedVlaue =
      name === "age" || name === "id" || name === "phone" ? Number(val) : val;
    // Cập nhật vào state
    this.setState((prevState) => ({
      ...prevState,
      [name]: val, // Cập nhật giá trị mới
    }));
  };

  //handleSubmit: hàm khi submit form
  handleSubmit = (event: any) => {
    event.preventDefault(); // Ngăn chặn hành động submit mặc định của form
    this.props.onSubmit(this.state); // Gọi hàm handleSumit từ props
    console.log("Submitted Data:", this.state);
    alert(
      `Tên: ${this.state.name}\nTuổi: ${this.state.age}\nPhone: ${this.state.phone}`
    );
  };

  render() {
    return (
      <div>
        <form method="post">
          <div>
            Student ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </div>
          <div>
            Student Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            Student Age:
            <input type="number" name="age" onChange={this.handleChange} />
          </div>
          <div>
            Student Gender:
            <input type="text" name="gender" onChange={this.handleChange} />
          </div>
          <div>
            Student Address:
            <input type="text" name="add" onChange={this.handleChange} />
          </div>
          <div>
            Student Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </div>
          <div>
            Student Phone:
            <input type="number" name="phone" onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit}>Cập nhật thông tin</button>
        </form>
      </div>
    );
  }
}
