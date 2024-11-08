import { createSlice } from "@reduxjs/toolkit";

// data & types
import {
  SqlLanguageTypes,
  CodingLanguageTypes,
} from "@/components/editor/type";
import { startingTemplates } from "@/data/editor.data";
import { EditorSettingType, EditorSliceState } from "./type";

const initialState: EditorSliceState = {
  sql: {
    code: "",
    language: "mysql",
  },
  coding: {
    language: "javascript",
    code: startingTemplates.javascript,
  },
  settings: {
    tabSize: "4",
    fontSize: "14",
    theme: "githubLight",
  },
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    // code editor setting event handler
    setEditorSetting: (
      state,
      { payload }: { payload: Partial<EditorSettingType> }
    ) => {
      state.settings = { ...state.settings, ...payload };
    },
    // sql language event handler
    setSqlLanguage: (state, { payload }: { payload: SqlLanguageTypes }) => {
      state.sql.language = payload;
    },
    // coding language event handler
    setCodingLanguage: (
      state,
      { payload }: { payload: CodingLanguageTypes }
    ) => {
      state.coding.language = payload;
      state.coding.code = startingTemplates[payload];
    },
    // user input code event handler
    setCodeForCoding: (state, { payload }: { payload: string }) => {
      state.coding.code = payload;
    },
  },
});

export const {
  setSqlLanguage,
  setCodingLanguage,
  setEditorSetting,
  setCodeForCoding,
} = editorSlice.actions;

export const getCodingLang = (state: { editor: EditorSliceState }) =>
  state.editor.coding.language;
export const getSqlLang = (state: { editor: EditorSliceState }) =>
  state.editor.sql.language;
export const getEditorSetting = (state: { editor: EditorSliceState }) =>
  state.editor.settings;
export const getCodingCode = (state: { editor: EditorSliceState }) =>
  state.editor.coding.code;

export default editorSlice.reducer;
