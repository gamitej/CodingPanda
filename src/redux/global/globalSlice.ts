import { createSlice } from "@reduxjs/toolkit";
// type
import { GlobalState } from "./type";
// utils
import { ThemeManager } from "@/utils/ThemeSession";

const initialState: GlobalState = {
  isLoggedIn: false,
  isLightMode: ThemeManager.getStoredThemeMode(),
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLightMode: (state, { payload }: { payload: boolean }) => {
      state.isLightMode = payload;
      ThemeManager.toggleThemeModeSession(state.isLightMode);
    },
  },
});

// action creators
export const { setIsLightMode } = globalSlice.actions;
export const getIsLightMode = (state: { global: GlobalState }) =>
  state.global.isLightMode;

export default globalSlice.reducer;
