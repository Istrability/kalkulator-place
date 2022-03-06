import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = JSON.parse(
  localStorage.getItem("hideOptional") ?? "true"
) as boolean;

export const hideOptionalSlice = createSlice({
  name: "hideOptional",
  initialState,
  reducers: {
    setHideOptional: (_state, action) => {
      localStorage.setItem("hideOptional", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { setHideOptional } = hideOptionalSlice.actions;
export const selectHideOptional = (state: RootState) => state.hideOptional;

export default hideOptionalSlice.reducer;
