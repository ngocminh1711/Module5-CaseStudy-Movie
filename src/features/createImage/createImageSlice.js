
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    backdropURL: '',
    detailURL: '',
};


export const createImageURLSlice = createSlice({
    name: 'createImage',
    initialState,
    reducers :
        {
            createBackdropURL: (state, action) => {

                state.backdropURL = action.payload

            },
            createImageURL: (state, action) => {

                state.detailURL = action.payload
            }

        }
})

export const { createBackdropURL, createImageURL } = createImageURLSlice.actions
export default createImageURLSlice.reducer
