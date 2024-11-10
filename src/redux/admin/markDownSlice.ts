import { createSlice } from "@reduxjs/toolkit";
// type

interface MarkDownEditorStateType {
  text: string;
}

const initialState: MarkDownEditorStateType = {
  text: "",
};
const MarkDownEditorSlice = createSlice({
  name: "markDownEditor",
  initialState,
  reducers: {
    setMarkDownEditorText: (state, { payload }: { payload: string }) => {
      state.text = payload;
    },
  },
});

// action creators
export const { setMarkDownEditorText } = MarkDownEditorSlice.actions;

//
export const getMarkDownEditorText = (state: {
  markDownEditor: MarkDownEditorStateType;
}) => state.markDownEditor.text;

export default MarkDownEditorSlice.reducer;
