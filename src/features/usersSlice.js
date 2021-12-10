import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../back-end/_DATA";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (dispatch, getState) => {
    let res = await _getUsers();
    return res;
  }
);

const initialState = { value: null };

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default usersSlice.reducer;
