import { createSlice } from "@reduxjs/toolkit";
import { fetchPostById, fetchPosts } from "../../utils/thunks";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    articles: [],
    page: 0,
    end: false,
    postById: undefined,
  },
  reducers: {
    clearPostById: (state) => {
      state.postById = {};
    },
  },
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
        console.log("EL ESTADO DE LA PETICIÓN ES PENDIENTE");
        return {
          ...state,
          loading: true,
          postById: undefined,
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

export const { clearPostById } = postsSlice.actions;
export default postsSlice.reducer;
