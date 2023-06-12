import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "blue",
  },
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload.color;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
