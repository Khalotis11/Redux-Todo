import React, { Component } from "react";
import "./todo.css";

import { connect } from "react-redux";
import { addTodos } from "../actions";

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
  handleClick = evt => {
    evt.preventDefault();
    this.setState({
      todo: this.props.addTodos(this.state.textInput)
    });
    this.setState({ textInput: "" });
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
        <button onClick={this.handleClick} className="form-btn">
          Add To List
        </button>
        <div>
          {this.props.todo.map((todos, index) => (
            <h2 key={index}>{todos.task}</h2>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};
export default connect(
  mapStateToProps,
  { addTodos }
)(TodoForm);
