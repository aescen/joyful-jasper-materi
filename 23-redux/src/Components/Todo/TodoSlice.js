import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, todo: "hello" },
    { id: 2, todo: "belajar" },
  ],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);

      state.data.push(action.payload)
    }
  },
});

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer;

