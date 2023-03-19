import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Form = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (value === "") {
      toast.error("Please enter a todo");
    } else if (value.length < 4) {
      toast.error("Todo must be at least 4 characters long!");
    } else if (todos.includes(value)) {
      toast.error("Todo already exists");
    } else {
      const newValue = value.trim();
      setTodos([...todos, newValue]);
      toast.success("Todo Added");
    }
  };

  return (
    <form action="" id="form">
      <input
        type="text"
        id="form-input"
        placeholder="Please Enter Todo"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          setValue("");
        }}
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
