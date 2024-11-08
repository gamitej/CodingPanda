import {
  FontTypes,
  ThemeTypes,
  TabSizeType,
  SqlLanguageTypes,
  CodingLanguageTypes,
  codingLanguageLabels,
  tabSizeLabels,
  fontSizeLabels,
  sqlLanguageLabels,
  themeLabels,
} from "@/components/editor/type";

export const codingOptions = Object.entries(codingLanguageLabels).map(
  ([value, label]) => ({
    value: value as CodingLanguageTypes,
    label,
  })
);

export const sqlLanguageOptions = Object.entries(sqlLanguageLabels).map(
  ([value, label]) => ({
    value: value as SqlLanguageTypes,
    label,
  })
);

export const tabSizeOptions = Object.entries(tabSizeLabels).map(
  ([value, label]) => ({
    value: value as TabSizeType,
    label,
  })
);

export const themeOptions = Object.entries(themeLabels).map(
  ([value, label]) => ({
    value: value as ThemeTypes,
    label,
  })
);

export const fontSizeOptions = Object.entries(fontSizeLabels).map(
  ([value, label]) => ({
    value: value as FontTypes,
    label,
  })
);

export const editorBodyContent: {
  desc: string;
  type: "fontSize" | "theme" | "tabSize";
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
    type: "tabSize",
    label: "Tab Size",
    desc: "Choose the width of a tab character.",
    dropdownData: {
      name: "Size",
      options: tabSizeOptions,
      label: "select tab size...",
    },
  },
  {
    type: "fontSize",
    label: "Font Size",
    desc: "Choose your preferred font size for code editor.",
    dropdownData: {
      name: "Size",
      options: fontSizeOptions,
      label: "select font size..",
    },
  },
];

export const startingTemplates: Record<CodingLanguageTypes, string> = {
  python: `# Python 3 Template\n\ndef main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()`,

  java: `// Java Template\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,

  javascript: `// JavaScript Template\n\nfunction main() {\n    console.log("Hello, World!");\n}\n\nmain();`,

  cpp: `// C++ Template\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
};
