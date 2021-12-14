import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../back-end/_DATA";
import { getUsers } from "./usersSlice";

export const getQuestions = createAsyncThunk(
  "Questions/getQuestions",
  async () => {
    let res = await _getQuestions();
    return res;
  }
);

export const saveQuestion = createAsyncThunk(
  "Questions/saveQuestion",
  async (payload, { dispatch }) => {
    try {
      let res = await _saveQuestion(payload);
      dispatch(getUsers())
        .then(() => dispatch(getQuestions()))
        .then(() => dispatch(setAdded(true)));

      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const answereQuestion = createAsyncThunk(
  "Questions/answereQuestion",
  async (payload, { dispatch, getState }) => {
    try {
      let res = await _saveQuestionAnswer(payload);

      dispatch(getUsers()).then(() => dispatch(getQuestions()));

      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { value: null, added: false };

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setAdded: (state, action) => {
      state.added = action.payload;
    },
  },
  extraReducers: {
    [getQuestions.fulfilled]: (state, action) => {
      state.value = Object.values(action.payload);
    },
  },
});

export const { setAdded } = questionsSlice.actions;

export default questionsSlice.reducer;
