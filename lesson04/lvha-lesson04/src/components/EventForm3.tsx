import React, { Component, ChangeEvent, FormEvent } from "react";

interface IPropsState {
  name: string;
  age: number;
  course: string;
}
export default class EventForm3 extends Component<{}, IPropsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "HA",
      age: 22,
      course: "ReactJS",
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    // nếu là tuổi thì ép kiểu
    const val = name === "age" ? Number(value) : value;
    // Cập nhật vào state
    this.setState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn chặn hành động submit mặc định của form
    alert(
      `Tên: ${this.state.name}\nTuổi: ${this.state.age}\nKhóa Học: ${this.state.course}`
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Tên:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Tuổi:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Khóa Học:
            <select
              name="course"
              value={this.state.course}
              onChange={this.handleChange}
            >
              <option value={"HTML5"}>HTML5</option>
              <option value={"CSS3"}>CSS3</option>
              <option value={"Javascript"}>Javascript</option>
              <option value={"ReactJS"}>ReactJS</option>
            </select>
          </p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
