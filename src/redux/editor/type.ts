import {
  FontTypes,
  ThemeTypes,
  TabSizeType,
  SqlLanguageTypes,
  CodingLanguageTypes,
} from "@/components/editor/type";

export type EditorSettingType = {
  theme: ThemeTypes;
  tabSize: TabSizeType;
  fontSize: FontTypes;
};

export interface EditorSliceState {
  sql: {
    code: string;
    language: SqlLanguageTypes;
  };
  coding: {
    code: string;
    language: CodingLanguageTypes;
  };
  settings: EditorSettingType;
}
