import { Button, Modal } from "antd";
import { addTodo, deleteTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState("");

  const [addTodoModal, isAddTodoModal] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoState.todos); // Access todos from the correct state

  //modal
  const showAddTodoModal = () => {
    isAddTodoModal(true);
  };

  const addListHandle = () => {
    isAddTodoModal(false);
    if (todoInput.trim()) {
      dispatch(addTodo(todoInput));
      setTodoInput("");
    }
  };
  const cancelListHandle = () => {
    isAddTodoModal(false);
  };
  return (
    <>
      <div>
        <div
          className="flex
        flex-col justify-around"
        >
          <Button
            type="primary"
            onClick={showAddTodoModal}
            className="w-[50vw]"
          >
            Add Todo
          </Button>

          <ul className="">
            {todos.map((todo) => (
              <li key={todo.id} className="grid grid-cols-2 mb-[2vh] ">
                <div>
                  {todo.id + "  "}
                  {todo.content}{" "}
                </div>
                <Button
                  type="primary"
                  className="w-[20vw]
                  m-[auto]"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal
        title="Add List To Todo"
        open={addTodoModal}
        onOk={addListHandle}
        onCancel={cancelListHandle}
      >
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="border-[5px] w-[50vw]"
          placeholder="Enter todo"
        />
        {/* <Input placeholder="Enter your todo" /> */}
      </Modal>
    </>
  );
};
export default TodoApp;
