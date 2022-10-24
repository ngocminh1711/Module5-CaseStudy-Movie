import { configureStore } from '@reduxjs/toolkit';
import movieReducer  from '../features/movieSlice';
import searchReducer from '../features/search/searchSlice'
import createVideoURL from '../features/createVideo/createVideoSlice'


export const store = configureStore({
    reducer: {
        movie : movieReducer,
        search: searchReducer,
        createVideo: createVideoURL
    }
   
});
