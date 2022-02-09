import { createSlice } from "@reduxjs/toolkit";
import { useGetItembyIdQuery } from "./api";

const initialState = {
  news: [],
};
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, { payload }) => {
      state.news = payload;
    },
  },
});
export const { addNews } = newsSlice.actions;
export const getAllNews = (state) => state.news;
export default newsSlice.reducer;
