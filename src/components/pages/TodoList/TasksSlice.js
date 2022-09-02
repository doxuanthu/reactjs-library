import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    taskStatus: (state, action) => {
      const result = state.find((task) => task._id === action.payload);
      result.completed = !result.completed;
    },
  },
});

export const { addTask, taskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
