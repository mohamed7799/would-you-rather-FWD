import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    view: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { view } = questionSlice.actions;

export default questionSlice.reducer;
