import { createSlice } from "@reduxjs/toolkit";
import { izracunajPlacu } from "./isracunajPlacu";
import { RootState } from "./store";

const initialState = {
  values: {},
  calculating: false,
} as {
  values: Record<string, number>;
  calculating: boolean;
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calculateResult: (state, action) => {
      state.values = izracunajPlacu(action.payload);
    },
  },
});

export const { calculateResult } = calculatorSlice.actions;
export const selectCalculatorResult = (state: RootState) => state.calculator;

export default calculatorSlice.reducer;
