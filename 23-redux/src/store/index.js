import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../Components/Books/BooksSlice";
import cakeReducer from "../Components/Cake/CakeSlice";
import userReducer from "../Components/User/UserSlice";
import todoReducer from "../Components/Todo/TodoSlice";


const store = configureStore({
  reducer: {
    book: bookReducer,
    cake: cakeReducer,
    user: userReducer,
    todo: todoReducer,
  },
});

export default store;
