import { createSelector } from "@reduxjs/toolkit";

export const userNameSelector = (state) => state.login.userName;
export const passwordSelector = (state) => state.login.password;
export const usersSelector = (state) => state.register;
export const displaySelector = (state) => state.calculator.display;
// export const displaySelector = (state) => state.calculator.display;

export const validUser = createSelector(
  usersSelector,
  userNameSelector,
  passwordSelector,
  (users, account, password) => {
    return users.find((user) => {
      return user.userName === account && user.password === password;
    });
  }
);
