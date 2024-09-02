import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "./TodoRedux/todoSlices";

const TodoApp = () => {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodos({
        id: Date.now(),
        text: "New Todo",
      })
    );
  };
  return (
    <>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={handleAddTodo}> Add Todo</button>
    </>
  );
};
export default TodoApp;
