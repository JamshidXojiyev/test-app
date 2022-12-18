import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "jspAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech/",
    Key: localStorage.getItem("key") && localStorage.getItem("key"),
    Sign: localStorage.getItem("sign") && localStorage.getItem("key"),
  }),
  tagTypes: ["CREATE_USER", "BOOKS"],
  endpoints: (build) => ({
    createUser: build.mutation({
      query: ({ body }) => ({
        url: "signup",
        body,
        method: "POST",
      }),
      invalidatesTags: ["CREATE_USER"],
    }),
  }),
});

export default apiSlice;

export const {
  useGetTodosQuery,
  useGetPostsQuery,
  useDeletePostMutation,
  useCreatePostMutation,
} = apiSlice;
