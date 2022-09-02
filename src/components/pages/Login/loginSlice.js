import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "login",
  initialState: {
    userName: "",
    password: "",
  },
  reducers: {
    inputUser: (state, action) => {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
    signOut: (state) => {
      state.userName = "";
      state.password = "";
    },
  },
});

export const { inputUser, signOut } = loginReducer.actions;
export default loginReducer.reducer;
