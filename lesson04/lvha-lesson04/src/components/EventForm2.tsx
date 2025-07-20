import React, { Component } from "react";
import IStudent from "./IStudent";

interface IProps {
  onSubmit: (data: IStudent) => void;
}
export default class EventForm1 extends Component<IProps, IStudent> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: 1,
      name: "HA",
      age: 22,
    };
  }

  handleChange = (event: any) => {
    // Lấy thành phần và dữ liệu trên form
    let name = event.target.name;
    let val = event.target.value;
    const parsedValue = name === "age" || name === "id" ? Number(val) : val;
    // Cập nhật vào state
    this.setState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  //handleSubmit: hàm khi submit form
  handleSubmit = (event: any) => {
    event.preventDefault(); // Ngăn chặn hành động submit mặc định của form
    this.props.onSubmit(this.state); // Gọi hàm handleSumit từ props
  };

  render() {
    return (
      <div>
        {/* <div>
          <p>Student Name: {this.state.name}</p>
          <p>Student Name: {this.state.age}</p>
        </div> */}
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
            Student age:
            <input type="number" name="age" onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit}>Cập nhật thông tin</button>
        </form>
      </div>
    );
  }
}
