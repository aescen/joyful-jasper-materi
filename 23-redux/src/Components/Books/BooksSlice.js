import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBooks: 456,
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
  },
});

export default bookSlice.reducer;
export const { borrow } = bookSlice.actions;
