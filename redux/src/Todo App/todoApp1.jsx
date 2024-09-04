//TodoApp.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../actions";

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState("");
  const todos = useSelector((state) => state.todoState.todos); // Access todos from the correct state
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoInput.trim()) {
      dispatch(addTodo(todoInput));
      setTodoInput("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content} {/* Display content */}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
