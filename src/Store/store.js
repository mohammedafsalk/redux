import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./Slices/colorSlice.js";
import countReducer from "./Slices/counterSlice.js";

export default configureStore({
  reducer: {
    color: colorReducer,
    count: countReducer,
  },
});
