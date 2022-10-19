import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../utils/thunks";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: true,
    articles: [],
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
          articles: action.payload ? [...action.payload] : [],
        };
      });
  },
});

export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;
