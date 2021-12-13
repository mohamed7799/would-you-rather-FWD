import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestionAnswer } from "../back-end/_DATA";
import { getUsers } from "./usersSlice";

export const getQuestions = createAsyncThunk(
  "Questions/getQuestions",
  async () => {
    let res = await _getQuestions();
    return res;
  }
);

export const answereQuestion = createAsyncThunk(
  "Questions/answereQuestion",
  async (payload, { dispatch, getState }) => {
    try {
      const state = getState();
      let res = await _saveQuestionAnswer({
        authedUser: state.user.value.id,
        qid: state.question.value.id,
        answer: state.question.selectedAnswer,
      });

      dispatch(getUsers());
      dispatch(getQuestions());

      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { value: null };

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuestions.fulfilled]: (state, action) => {
      state.value = Object.values(action.payload);
    },
    [answereQuestion.fulfilled]: () => {},
  },
});

export default questionsSlice.reducer;
