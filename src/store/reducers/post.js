import { createSlice } from "@reduxjs/toolkit";
import { fetchPostById, fetchPosts } from "../../utils/thunks";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: true,
    articles: [],
    page: 0,
    end: false,
    postById: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        return {
          ...state,
          loading: true, // it is important to keep inmutability of the state
        };
      })
      .addCase(fetchPosts.rejected, (state) => {
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      })
      .addCase(fetchPostById.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchPostById.rejected, (state) => {
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          postById: action.payload,
        };
      });
  },
});

export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;
