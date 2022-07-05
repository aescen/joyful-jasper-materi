import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCakes: 90,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,

  reducers: {
    decrementCake: (state) => {
      state.totalCakes--;
    },
    restockCake: (state) => {
      state.totalCakes += 100;
    },
  },
});

export default cakeSlice.reducer;
export const { decrementCake, restockCake } = cakeSlice.actions;
