import { configureStore } from '@reduxjs/toolkit';
import movieReducer  from '../features/movieSlice';
import searchReducer from '../features/search/searchSlice'


export const store = configureStore({
    reducer: {
        movie : movieReducer,
        search: searchReducer
    }
   
});
