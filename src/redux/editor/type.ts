import {
  CodingLanguageTypes,
  SqlLanguageTypes,
} from "@/components/editor/type";

export interface EditorSliceState {
  theme: string;
  sql: {
    code: string;
    language: SqlLanguageTypes;
  };
  coding: {
    code: string;
    language: CodingLanguageTypes;
  };
}
