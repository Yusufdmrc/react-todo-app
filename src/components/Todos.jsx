import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <Todo id={index} todo={todo} key={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default Todos;
