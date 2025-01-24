"use client";
import { createSlice } from "@reduxjs/toolkit";

const initState: any = {
  user: {},
  isLoggedIn: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setAuthReducer: (state, action) => {
      let tempObj = { ...state, ...action.payload };
      return tempObj;
    },
    resetAuthReducer: () => initState,
    resetAuth: () => initState,
  },
});

export const { setAuthReducer, resetAuthReducer, resetAuth } =
  authSlice.actions;

export default authSlice.reducer;
