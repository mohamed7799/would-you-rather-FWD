import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions } from "../back-end/_DATA";

export const getQuestions = createAsyncThunk(
  "Questions/getQuestions",
  async (dispatch, getState) => {
    let res = await _getQuestions();
    return res;
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
  },
});

export default questionsSlice.reducer;
