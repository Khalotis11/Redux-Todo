import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h2 className="title">My Todo List :</h2>
      <TodoForm />
    </div>
  );
}

export default App;
