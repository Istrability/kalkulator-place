import { createSlice } from "@reduxjs/toolkit";
import { izracunajPlacu } from "./isracunajPlacu";
import { RootState } from "./store";

const initialState = {
  values: {},
  calculating: false,
} as {
  values: Record<string, number> | string;
  calculating: boolean;
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calculateResult: (state, action) => {
      let results: Record<string, number> | string;
      try {
        results = izracunajPlacu(action.payload);
      } catch (e: any) {
        results = e.message;
      }
      state.values = results;
    },
  },
});

export const { calculateResult } = calculatorSlice.actions;
export const selectCalculatorResult = (state: RootState) => state.calculator;

export default calculatorSlice.reducer;
