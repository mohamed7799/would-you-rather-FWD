import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import userRducer from "../features/userSlice";
import questionsReducer from "../features/questionsSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userRducer,
    questions: questionsReducer,
  },
  devTools: true,
});
