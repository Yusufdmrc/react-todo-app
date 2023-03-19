import Form from "./components/Form";
import Todos from "./components/Todos";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div>
      <ToastContainer />
      <Form todos={todos} setTodos={setTodos} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
