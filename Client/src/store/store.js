import { configureStore } from '@reduxjs/toolkit';
import { directoriesApi } from './slices/directoriesSlice';
import {user} from "./slices/UserSlice.js"

export const store = configureStore({
  reducer: {
    [directoriesApi.reducerPath]: directoriesApi.reducer,
    [user.reducerPath]: user.reducer
    // ... other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(directoriesApi.middleware,user.middleware),
});