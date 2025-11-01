import { configureStore } from '@reduxjs/toolkit'
import {directoriesApi} from './slices/directories.js'
import {user} from "./slices/UserSlice.js"

export const store = configureStore({
  reducer: {
    [directoriesApi.reducerPath]: directoriesApi,
    [user.reducerPath]: user.reducer,
  },
   middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(user.middleware),
   middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(directoriesApi.middleware),
})