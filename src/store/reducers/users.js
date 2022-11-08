import { createSlice } from "@reduxjs/toolkit";
import { addToNewsletter } from "../../utils/thunks";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToNewsletter.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(addToNewsletter.rejected, (state) => {
        console.log("failed");
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(addToNewsletter.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      });
  },
});

export default usersSlice.reducer;
