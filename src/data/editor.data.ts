import {
  FontTypes,
  ThemeTypes,
  TabSizeType,
  SqlLanguageTypes,
  CodingLanguageTypes,
} from "@/components/editor/type";

export const codingOptions: { value: CodingLanguageTypes; label: string }[] = [
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "Javascript" },
];

export const sqlOptions: { value: SqlLanguageTypes; label: string }[] = [
  { value: "mysql", label: "MySql" },
  { value: "oracle", label: "Oracle" },
  { value: "postgresql", label: "PostgreSql" },
];

export const tabOptions: { value: TabSizeType; label: string }[] = [
  { value: "2", label: "2" },
  { value: "4", label: "4" },
  { value: "8", label: "8" },
];

export const themeOptions: { value: ThemeTypes; label: string }[] = [
  { value: "okaidia", label: "Okaidia" },
  { value: "xcodeLight", label: "XcodeLight" },
  { value: "githubLight", label: "GithubLight" },
  { value: "duotoneLight", label: "DuotoneLight" },
];

export const fontOptions: { value: FontTypes; label: string }[] = [
  { value: "10", label: "10" },
  { value: "12", label: "12" },
  { value: "14", label: "14" },
  { value: "16", label: "16" },
  { value: "18", label: "18" },
  { value: "20", label: "20" },
  { value: "22", label: "22" },
  { value: "24", label: "24" },
];

export const editorBodyContent: {
  desc: string;
  type: "font" | "theme" | "tab";
  label: string;
  dropdownData: {
    name: string;
    label: string;
    options:
      | { value: ThemeTypes; label: string }[]
      | { value: TabSizeType; label: string }[]
      | { value: FontTypes; label: string }[];
  };
}[] = [
  {
    type: "theme",
    label: "Theme",
    desc: "Try different themes & syntax highlighting.",
    dropdownData: {
      name: "Themes",
      label: "select theme",
      options: themeOptions,
    },
  },
  {
    type: "tab",
    label: "Tab Size",
    desc: "Choose the width of a tab character.",
    dropdownData: {
      name: "Size",
      options: tabOptions,
      label: "select tab size...",
    },
  },
  {
    type: "font",
    label: "Font Size",
    desc: "Choose your preferred font size for code editor.",
    dropdownData: {
      name: "Size",
      options: fontOptions,
      label: "select font size..",
    },
  },
];
