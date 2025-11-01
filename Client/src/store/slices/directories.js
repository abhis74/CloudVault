import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ...existing code...

export const directoriesApi = createApi({
  reducerPath: 'directoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    fetchDirectory: builder.query({
      query: (id = '') => `directory/${id}`,
      // Optionally transform response if needed
    }),
    createDirectory: builder.mutation({
      query: ({ id = '', directoryName }) => ({
        url: `directory/${id}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', dirname: directoryName },
      }),
    }),
    deleteDirectory: builder.mutation({
      query: (id) => ({
        url: `directory/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
    }),
    renameDirectory: builder.mutation({
      query: ({ id, DirName }) => ({
        url: `directory/${id}`,
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ DirName }),
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useFetchDirectoryQuery,
  useCreateDirectoryMutation,
  useDeleteDirectoryMutation,
  useRenameDirectoryMutation,
} = directoriesApi;
