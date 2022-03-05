import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = false as boolean;

export const hideOptionalSlice = createSlice({
  name: "hideOptional",
  initialState,
  reducers: {
    setHideOptional: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setHideOptional } = hideOptionalSlice.actions;
export const selectHideOptional = (state: RootState) => state.hideOptional;

export default hideOptionalSlice.reducer;
