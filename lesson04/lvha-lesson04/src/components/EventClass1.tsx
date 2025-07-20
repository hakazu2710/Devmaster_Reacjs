import React, { Component } from "react";

interface EventClass1State {
  name: string;
  age: number;
}
export default class EventClass1 extends Component<{}, EventClass1State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "HA",
      age: 22,
    };
  }

  //handleChange
  handleChange = () => {
    this.setState({
      name: "HTV",
      age: 23,
    });
  };

  render() {
    return (
      <div>
        <h2>
          Welcome to, {this.state.name}; tuổi: {this.state.age}
        </h2>
        <button onClick={this.handleChange} className="btn btn-success">
          Change info
        </button>
      </div>
    );
  }
}
