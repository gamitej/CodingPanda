import { createSlice } from "@reduxjs/toolkit";

// types
import {
  SqlLanguageTypes,
  CodingLanguageTypes,
} from "@/components/editor/type";
import { EditorSettingType, EditorSliceState } from "./type";

const initialState: EditorSliceState = {
  sql: {
    code: "",
    language: "mysql",
  },
  coding: {
    code: "",
    language: "python",
  },
  settings: {
    tabSize: "4",
    fontSize: "18",
    theme: "githubLight",
  },
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setEditorSetting: (
      state,
      { payload }: { payload: Partial<EditorSettingType> }
    ) => {
      state.settings = { ...state.settings, ...payload };
    },

    setSqlLanguage: (state, { payload }: { payload: SqlLanguageTypes }) => {
      state.sql.language = payload;
    },
    setCodingLanguage: (
      state,
      { payload }: { payload: CodingLanguageTypes }
    ) => {
      state.coding.language = payload;
    },
  },
});

export const { setSqlLanguage, setCodingLanguage, setEditorSetting } =
  editorSlice.actions;

export const getCodingLang = (state: { editor: EditorSliceState }) =>
  state.editor.coding.language;
export const getSqlLang = (state: { editor: EditorSliceState }) =>
  state.editor.sql.language;
export const getEditorSetting = (state: { editor: EditorSliceState }) =>
  state.editor.settings;

export default editorSlice.reducer;
