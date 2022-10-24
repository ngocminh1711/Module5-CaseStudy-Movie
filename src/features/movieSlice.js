import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  movieDetail : [],
  playVideo : '',
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
    },
    getPlayVideo : (state, action) => {
      state.playVideo = action.payload
    }
  },
});

export const {getMovieDetail, clearMovieDetail, getPlayVideo} = moviesSlice.actions;
export default moviesSlice.reducer;


