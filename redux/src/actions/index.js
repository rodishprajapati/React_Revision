export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//Todo App
let nextId = 0;
export const addTodo = (content) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: ++nextId,
      content,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
