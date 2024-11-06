import { combineReducers } from "@reduxjs/toolkit";

// reducers
import globalSlice from "./global/globalSlice";
import editorSlice from "./editor/editorSlice";

const rootReducer = combineReducers({
  global: globalSlice,
  editor: editorSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
