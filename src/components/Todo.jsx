import React from "react";

export const Todo = ({ todo, id, deleteTodo }) => {
  return (
    <div className="todo">
      <p>{todo}</p>
      <i
        className="fas fa-times-circle"
        onClick={() => {
          deleteTodo(id);
        }}
      ></i>
    </div>
  );
};

export default Todo;
