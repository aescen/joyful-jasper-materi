import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBooks: 456,
  totalAuthor: 100,
};

const bookSlice = createSlice({
  name: "book",
  initialState,

  // reducers
  reducers: {
    // action borrow
    borrow: (state) => {
      state.totalBooks--;
    },
    plusAuthor: (state) => {
      state.totalAuthor += 100;
    },
  },
});

export default bookSlice.reducer;
export const { borrow, plusAuthor } = bookSlice.actions;
