import { createSlice } from '@reduxjs/toolkit'
const directoriesSlice = createSlice({
    name: 'directories',
    initialState: {
        directoriesList: [],
    },
    reducers: {
        directoriesList: (state, action) => {
            state.directoriesList = action.payload;
        },
    },
})
export const { directoriesList } = directoriesSlice.actions;
export default directoriesSlice.reducer;