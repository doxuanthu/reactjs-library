import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: [],
  reducers: {
    generateUsers: (state, action) => {
      console.log({ state });
      state.push(action.payload);
    },
  },
});

export const { generateUsers } = registerSlice.actions;
export default registerSlice.reducer;
