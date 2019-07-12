import React, { Component } from "react";
import "./todo.css";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      textInput: ""
    };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <div className="form-container">
        <input
          type="text"
          name="textInput"
          placeholder="Add New Task..."
          value={this.state.textInput}
          onChange={this.handleChange}
          className="form-input"
        />
        <button className="form-btn">Add To List</button>
      </div>
    );
  }
}
export default TodoForm;
