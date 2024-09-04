import { combineReducers } from "redux";

const initialState = 3;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(action.type);
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//todo List
const initialtodo = {
  todos: [],
  todoState: "you have no todos",
};
const todoState = (state = initialtodo, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  changeTheNumber,
  todoState,
});
export default rootReducer;
