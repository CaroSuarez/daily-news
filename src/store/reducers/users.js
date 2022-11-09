import { createSlice } from "@reduxjs/toolkit";
import { addToNewsletter } from "../../utils/thunks";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    action: {
      loading: false,
    },
  },
  reducers: {
    clearNewsLetter: (state) => {
      console.log("dentor del clearNewsletter");
      state.action = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToNewsletter.pending, (state) => {
        state.action = {
          ...state.action,
          loading: true,
        };
      })
      .addCase(addToNewsletter.rejected, (state) => {
        console.log("failed");
        state.action = {
          ...state.action,
          loading: false,
        };
      })
      .addCase(addToNewsletter.fulfilled, (state, action) => {
        state.action = {
          ...action.payload,
          loading: false,
        };
      });
  },
});

export const { clearNewsLetter } = usersSlice.actions;
export default usersSlice.reducer;
