import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlices";

const todoStore = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
export default todoStore;
