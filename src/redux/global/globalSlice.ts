import { createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "./type";

const initialState: GlobalState = {
  isLoggedIn: false,
  isLightMode: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLightMode: (state, { payload }: { payload: boolean }) => {
      state.isLightMode = payload;
    },
  },
});

// Action creators
export const { setIsLightMode } = globalSlice.actions;

export const getIsLightMode = (state: { global: GlobalState }) =>
  state.global.isLightMode;

export default globalSlice.reducer;
