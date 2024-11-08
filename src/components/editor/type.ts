// ============== Tab size labels ==================
export type TabSizeType = "2" | "4" | "8";
export const tabSizeLabels: Record<TabSizeType, string> = {
  "2": "2 Spaces",
  "4": "4 Spaces",
  "8": "8 Spaces",
};

// ============== Font size labels ================

export type FontTypes = "10" | "12" | "14" | "16" | "18" | "20" | "22" | "24";

export const fontSizeLabels: Record<FontTypes, string> = {
  "10": "10px",
  "12": "12px",
  "14": "14px",
  "16": "16px",
  "18": "18px",
  "20": "20px",
  "22": "22px",
  "24": "24px",
};

// =============== SQL language labels ===============

export type SqlLanguageTypes = "oracle" | "mysql" | "postgresql";

export const sqlLanguageLabels: Record<SqlLanguageTypes, string> = {
  mysql: "MySQL",
  oracle: "Oracle",
  postgresql: "PostgreSQL",
};

// ================= Coding language labels =================

export type CodingLanguageTypes = "python" | "javascript" | "cpp" | "java";

export const codingLanguageLabels: Record<CodingLanguageTypes, string> = {
  cpp: "C++",
  java: "Java",
  python: "Python",
  javascript: "JavaScript",
};

// ================= Theme language labels =================

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

export const themeLabels: Record<ThemeTypes, string> = {
  okaidia: "Okaidia",
  bespin: "Bespin",
  dracula: "Dracula",
  xcodeDark: "Xcode Dark",
  githubDark: "GitHub Dark",
  githubLight: "GitHub Light",
  vscodeDark: "VS Code Dark",
  duotoneDark: "Duotone Dark",
  duotoneLight: "Duotone Light",
  xcodeLight: "Xcode Light",
};

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
export type CodeEditorProps =
  | { codeEditorHeight: string } & (CodeEditorPropsSql | CodeEditorPropsCoding);
