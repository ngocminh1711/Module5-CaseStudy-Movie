import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    searchedMovie: [],
};


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers :
        {
        searchMovie: (state, action) => {
            state.searchedMovie = action.payload
        }

    }
})

export const { searchMovie } = searchSlice.actions
export default searchSlice.reducer
