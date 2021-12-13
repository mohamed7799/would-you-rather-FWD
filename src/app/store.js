import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";
import userRducer from "../features/userSlice";
import questionsReducer from "../features/questionsSlice";
import questionReducer from "../features/questionSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userRducer,
    questions: questionsReducer,
    question: questionReducer,
  },
  devTools: true,
});
