import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const moviesReducer = createSlice({
  name: "movies",
  initialState: {
    status: "idle",
    listMovie: [],
    listTvShow: [],
    listProduct: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getFilms.fulfilled, (state, action) => {
        state.status = "idle";
        state.listMovie = action.payload.trailers;
        state.listTvShow = action.payload.tvShow;
        state.listProduct = action.payload.products;
      });
  },
});

export const getFilms = createAsyncThunk("fetchFilms", async () => {
  const res = await fetch("/api/films");
  const data = await res.json();
  console.log({ data });
  return data;
});

export const { getAllMovies } = moviesReducer.actions;
export default moviesReducer.reducer;
