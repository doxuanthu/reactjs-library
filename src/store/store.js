import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/lab_07/exercise1/TasksSlice";
import loginReducer from "../components/pages/Login/loginSlice";
import registerReducer from "../components/pages/Register/registerSlice";
import calculatorReducer from "../components/pages/Calculator/calculatorSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    login: loginReducer,
    register: registerReducer,
    calculator: calculatorReducer,
  },
});

export default store;
