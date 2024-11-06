import { createSlice } from "@reduxjs/toolkit";

// types
import {
  CodingLanguageTypes,
  SqlLanguageTypes,
} from "@/components/editor/type";

const initialState = {
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

export default editorSlice.reducer;
