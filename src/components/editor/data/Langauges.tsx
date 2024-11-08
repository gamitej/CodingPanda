// languages
import { cpp } from "@codemirror/lang-cpp";
import { sql } from "@codemirror/lang-sql";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
// type
import { LanguagesTypes } from "../type";

// Function to get the selected language configuration
export const getSelectedLanguageForm = ({
  type = "coding",
  language = "javascript",
}: LanguagesTypes) => {
  if (type === "coding") {
    switch (language) {
      case "cpp":
        return cpp();
      case "java":
        return java();
      case "python":
        return python();
      case "javascript":
        return javascript();
      default:
        throw new Error(`Unsupported coding language: ${language}`);
    }
  } else if (type === "sql") {
    return sql();
  } else {
    throw new Error(`Unsupported editor type: ${type}`);
  }
};
