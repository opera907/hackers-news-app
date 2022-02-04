import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsByTypeQuery,
  useGetItembyIdQuery,
  useGetUserbyNameQuery,
} = hackersApi;
