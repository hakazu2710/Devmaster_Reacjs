import React, { Component } from "react";

// định nghĩa kiểu cho state
interface ClassMemberProps {
  name: string;
  age: number;
}
export default class ClassMember extends Component<{}, ClassMemberProps> {
  // state
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Devmaster",
      age: 22,
    };
  }

  //handleChange
  handleChange = () => {
    this.setState({
      name: "HVT",
      age: 23,
    });
  };

  render() {
    return (
      <div className="alert alert-success">
        <h2>Đọc dữu liệu trong state</h2>
        <hr />
        <p>Xin chào, {this.state.name}</p>
        <p>Tôi {this.state.age} tuổi</p>

        <button onClick={this.handleChange}>Change info</button>
      </div>
    );
  }
}
