export type TabSizeType = "2" | "4" | "8";
export type FontTypes = "10" | "12" | "14" | "16" | "18" | "20" | "22" | "24";
export type SqlLanguageTypes = "oracle" | "mysql" | "postgresql";
export type CodingLanguageTypes = "python" | "javascript" | "cpp" | "java";
export type ThemeTypes =
  | "okaidia"
  | "bespin"
  | "dracula"
  | "xcodeDark"
  | "githubDark"
  | "githubLight"
  | "vscodeDark"
  | "duotoneDark"
  | "duotoneLight"
  | "xcodeLight";

interface CodeEditorPropsBase {
  code: string;
  theme?: ThemeTypes;
  setCode: (code: SqlLanguageTypes | CodingLanguageTypes) => void;
}

type CodeEditorPropsSql = CodeEditorPropsBase & {
  type: "sql";
  language: SqlLanguageTypes;
};

type CodeEditorPropsCoding = CodeEditorPropsBase & {
  type: "coding";
  language: CodingLanguageTypes;
};

// Combined type
export type CodeEditorProps = CodeEditorPropsSql | CodeEditorPropsCoding;
