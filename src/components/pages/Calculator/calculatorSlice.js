import { createSlice } from "@reduxjs/toolkit";

// function handleCalculator(state) {
//   let result;
//   if (state.operator === "/") {
//     if (state.firstNum && state.secondNum) {
//       result = state.firstNum / state.secondNum;
//     } else if (state.result) {
//       state.firstNum = state.result;
//       state.result = "";
//       result = state.firstNum / state.secondNum;
//     }
//     state.display = result;
//   } else if (state.firstNum && state.secondNum && state.operator === "*") {
//     if (state.result) {
//       state.firstNum = state.result;
//     }
//     result = state.firstNum * state.secondNum;
//     state.display = result;
//   } else if (state.firstNum && state.secondNum && state.operator === "+") {
//     if (state.result) {
//       result = state.result + state.secondNum;
//       return;
//     }
//     result = +state.firstNum + +state.secondNum;
//     state.display = result;
//   } else if (state.firstNum && state.secondNum && state.operator === "-") {
//     if (state.result) {
//       result = state.result - state.secondNum;
//       return;
//     }
//     result = state.firstNum - state.secondNum;
//     state.display = result;
//     state.result = result;
//   }
// }

function handleCalculator(state) {
  let result;
  if (state.operator === "/") {
    result = state.firstNum / state.secondNum;
    state.display = result;
  } else if (state.operator === "*") {
    result = state.firstNum * state.secondNum;
    state.display = result;
  } else if (state.operator === "+") {
    result = +state.firstNum + +state.secondNum;
    state.display = result;
  } else if (state.operator === "-") {
    result = state.firstNum - state.secondNum;
    state.display = result;
  }
}

export const calculatorReducer = createSlice({
  name: "calculator",
  initialState: {
    display: "0",
    result: "",
    firstNum: "",
    secondNum: "",
    operator: "",
  },
  reducers: {
    pressNumber: (state, action) => {
      if (!state.firstNum) {
        if (action.payload === ".") {
          action.payload = "0.";
        }
        state.firstNum = action.payload;
        state.display = action.payload;
      } else if (state.firstNum && !state.operator) {
        state.firstNum = state.firstNum + "" + action.payload;
        state.display = state.firstNum;
      } else if (state.firstNum && state.operator && !state.secondNum) {
        if (action.payload === ".") {
          action.payload = "0.";
        }
        state.secondNum = state.secondNum + "" + action.payload;
        state.display = state.secondNum;
      } else if (
        state.firstNum &&
        state.operator &&
        state.secondNum &&
        !state.result
      ) {
        state.secondNum = state.secondNum + "" + action.payload;
        state.display = state.secondNum;
      } else if (state.firstNum && state.operator && state.secondNum) {
        if (action.payload === ".") {
          action.payload = "0.";
        }
        state.firstNum = state.result;
        state.result = "";
        state.secondNum = action.payload;
        state.display = state.secondNum;
      }
    },
    pressOperator: (state, action) => {
      if (!state.operator) {
        if (state.result) {
          state.firstNum = state.result;
          state.result = "";
        }
        state.operator = action.payload;
      } else {
        handleCalculator(state);
        state.operator = action.payload;
        state.result = state.display;
      }
    },
    pressEqual: (state, action) => {
      if (!state.firstNum || !state.secondNum) {
        return;
      }
      handleCalculator(state);
      state.firstNum = "";
      state.secondNum = "";
      state.operator = "";
      state.result = state.display;
    },
    pressReset: (state, action) => {
      state.firstNum = "";
      state.secondNum = "";
      state.operator = "";
      state.display = "0";
      state.result = "";
    },
  },
});

export const { pressNumber, pressOperator, pressEqual, pressReset } =
  calculatorReducer.actions;
export default calculatorReducer.reducer;
