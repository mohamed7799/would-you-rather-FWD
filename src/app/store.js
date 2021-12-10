import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import userRducer from "../features/userSlice";

export const store = configureStore({
  reducer: { users: usersReducer, user: userRducer },
  devTools: true,
});
