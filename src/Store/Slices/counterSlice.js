import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    upCount: (state) => {
      state.value += 1;
    },
    downCount: (state) => {
      state.value -= 1;
    },
  },
});

export const { upCount, downCount } = counterSlice.actions;
export default counterSlice.reducer;
