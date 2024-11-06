export type SqlLanguageTypes = "oracle" | "mysql" | "postgresql";
export type CodingLanguageTypes = "python" | "javascript" | "cpp" | "java";

interface CodeEditorPropsBase {
  code: string;
  setCode: (code: SqlLanguageTypes | CodingLanguageTypes) => void;
  theme?:
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
