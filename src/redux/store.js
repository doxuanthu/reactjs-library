import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../pages/JazzMovies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
