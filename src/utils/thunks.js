import { createAsyncThunk } from "@reduxjs/toolkit";

const SERVER_URL = "http://localhost:3001";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (
    { page = 1, limit = 10, order = "asc", controller },
    { rejectWithValue, getState }
  ) => {
    // here, getState() gives me access to the previous state
    try {
      const response = await fetch(
        `${SERVER_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`,
        {
          signal: controller?.signal,
        }
      );
      if (response) {
        controller = null;
      }
      if (!response.ok) {
        const error = response.status;
        throw error;
      }
      const data = await response.json();
      const prevState = getState().posts;

      return {
        page: page,
        end: data.length === 0,
        articles: [...prevState.articles, ...data],
      };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "post/fetchPostById",
  async ({ postId, controller }, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(`${SERVER_URL}/posts/${postId}`, {
        signal: controller?.signal,
      });
      if (response) {
        controller = null;
      }
      if (!response.ok) {
        const error = response.status;
        throw error;
      }
      const data = await response.json();

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
