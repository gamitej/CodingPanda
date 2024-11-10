import { createSlice } from "@reduxjs/toolkit";
// type
import { QuestionSetupState } from "./type";

const initialState: QuestionSetupState = {
  question: {
    text: "",
    difficultyMode: "",
    companyTag: "",
    premium: "",
    topic: "",
    type: "",
  },
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
