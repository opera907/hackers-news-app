import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hackersApi = createApi({
  reducerPath: "hackersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hacker-news.firebaseio.com/v0",
  }),
  endpoints: (builder) => ({
    getPostsByType: builder.query({
      query: (type) => `${type}stories.json`,
    }),
    getItembyId: builder.query({
      query: (id) => `item/${id}.json`,
    }),
    getUserbyName: builder.query({
      query: (name) => `user/${name}.json`,
    }),
  }),
});

export const {
  useGetPostsByTypeQuery,
  useGetItembyIdQuery,
  useGetUserbyNameQuery,
} = hackersApi;
