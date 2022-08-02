import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../pages/Calculator/calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;
