import React, { Component } from "react";

interface IState {
  name: string;
  age?: number;
}

export default class EventForm1 extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "HA",
      age: 22,
    };
  }

  handleChange = (event: any) => {
    // Lấy thành phần và dữ liệu trên form
    let name = event.target.name;
    let val = event.target.value;
    const parsedValue = name === "age" ? Number(val) : val;
    // Cập nhật vào state
    this.setState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  //handleSubmit: hàm khi submit form
  handleSubmit = (event: any) => {
    event.preventDefault(); // Ngăn chặn hành động submit mặc định của form
    alert(`Tên: ` + this.state.name + `\nTuổi: ` + this.state.age);
  };

  render() {
    return (
      <div>
        <div>
          <p>Student Name: {this.state.name}</p>
          <p>Student Name: {this.state.age}</p>
        </div>
        <form method="post">
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
