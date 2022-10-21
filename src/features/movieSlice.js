import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  movieDetail : []
};

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    getMovieDetail : (state, action) => {
      state.movieDetail.push(action.payload);
    },
    clearMovieDetail : (state, action) => {
      state.movieDetail = [];
    }
  },
});

export const {getMovieDetail, clearMovieDetail} = moviesSlice.actions;
export default moviesSlice.reducer;


