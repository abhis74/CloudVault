import { configureStore } from '@reduxjs/toolkit';
import { directoriesApi } from './slices/directoriesSlice';

export const store = configureStore({
  reducer: {
    [directoriesApi.reducerPath]: directoriesApi.reducer,
    // ... other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(directoriesApi.middleware),
});