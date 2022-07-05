import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../Components/Books/BooksSlice";
import cakeReducer from "../Components/Cake/CakeSlice";
import userReducer from "../Components/User/UserSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    cake: cakeReducer,
    user: userReducer,
  },
});

export default store;
