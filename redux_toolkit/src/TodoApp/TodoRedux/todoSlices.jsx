import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;
