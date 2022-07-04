import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../Components/Books/BooksSlice";

const store = configureStore({
  reducer: {
    tes: "tes",
    book: bookReducer,
  },
});

export default store;
