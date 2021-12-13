import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  selectedAnswer: null,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    view: (state, action) => {
      state.value = action.payload;
    },
    chooseAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
  },
});

export const { view, chooseAnswer } = questionSlice.actions;

export default questionSlice.reducer;
