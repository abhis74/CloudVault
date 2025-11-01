    // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
   
    // export const user = createApi({
        
    //   reducerPath: 'user', // Unique name for your API slice
    //   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/"}),
    //   endpoints: (builder) => ({
    //     getUsers: builder.query({
    //       query: () => 'user', // The path relative to the base URL
    //     }),
    //     addUser: builder.mutation({
    //       query: (newUser) => ({
    //         url: 'user',
    //         method: 'POST',
    //         body: newUser,
    //       }),
    //     }),
    //     loginUser:builder.mutation({
    //     query: (loginuser) => ({
    //         url: 'user/login',
    //         method: 'POST',
    //         body: loginuser,
    //       }),
    //   })
    //   }),
      
    // });
    // export const { useGetUsersQuery, useAddUserMutation, useLoginUserMutation } = user;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const user = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'user',
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: 'user',
        method: 'POST',
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: 'user/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: credentials,
      }),
    //   async onQueryStarted(arg, { queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       // if your server returns { token, user }
    //       if (data?.token) localStorage.setItem('token', data.token);
    //       if (data?.user) localStorage.setItem('user', JSON.stringify(data.user));
    //     } catch {
    //       // login failed, nothing to store
    //     }
    //   },
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useLoginUserMutation } = user;