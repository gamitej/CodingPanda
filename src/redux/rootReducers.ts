import { combineReducers } from "@reduxjs/toolkit";

// reducers
import globalSlice from "./global/globalSlice";
import editorSlice from "./editor/editorSlice";
import questionSlice from "./admin/questionSetupSlice";
import markDownEditorSlice from "./admin/markDownSlice";

const rootReducer = combineReducers({
  global: globalSlice,
  editor: editorSlice,
  questionSetup: questionSlice,
  markDownEditor: markDownEditorSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
