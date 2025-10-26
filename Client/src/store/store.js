import { configureStore } from '@reduxjs/toolkit'
import directoriesReducer from './slices/directories.js'

export const store = configureStore({
  reducer: {
    directories: directoriesReducer,
  },
})