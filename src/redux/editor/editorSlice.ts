import { createSlice } from "@reduxjs/toolkit";

// types
import {
  CodingLanguageTypes,
  SqlLanguageTypes,
} from "@/components/editor/type";
import { EditorSliceState } from "./type";

const initialState: EditorSliceState = {
  theme: "",
  sql: {
    code: "",
    language: "mysql",
  },
  coding: {
    code: "",
    language: "python",
  },
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
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

export const { setSqlLanguage, setCodingLanguage } = editorSlice.actions;

export const getCodingLang = (state: { editor: EditorSliceState }) =>
  state.editor.coding.language;
export const getSqlLang = (state: { editor: EditorSliceState }) =>
  state.editor.sql.language;

export default editorSlice.reducer;
