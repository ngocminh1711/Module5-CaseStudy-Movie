
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    videoURL: '',
};


export const createVideoURLSlice = createSlice({
    name: 'createVideo',
    initialState,
    reducers :
        {
            createVideoURL: (state, action) => {

                state.videoURL = action.payload

            }

        }
})

export const { createVideoURL } = createVideoURLSlice.actions
export default createVideoURLSlice.reducer
