import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLightMode: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLightMode: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { setIsLightMode } = globalSlice.actions;

export default globalSlice.reducer;
