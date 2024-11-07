import { FC, useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";

// languages
import { cpp } from "@codemirror/lang-cpp";
import { sql } from "@codemirror/lang-sql";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

// theme
import { bespin } from "@uiw/codemirror-theme-bespin";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";

// configuration
import { EditorState } from "@codemirror/state";
import { indentUnit } from "@codemirror/language";

// type
import { CodeEditorProps } from "./type";
import { useSelector } from "react-redux";
import { getEditorSetting } from "@/redux/editor/editorSlice";

const CodeEditor: FC<CodeEditorProps> = ({
  setCode,
  code = "",
  type = "coding",
  language = "javascript",
  codeEditorHeight = "50vh",
}) => {
  const { theme, fontSize, tabSize } = useSelector(getEditorSetting);

  const selectedLanguage = useMemo(() => {
    if (type === "coding") {
      if (language === "cpp") return cpp();
      if (language === "java") return java();
      if (language === "python") return python();
      if (language === "javascript") return javascript();
      return javascript();
    }
    return sql();
  }, [language]);

  const selectedTheme = useMemo(() => {
    if (theme === "bespin") return bespin;
    if (theme === "okaidia") return okaidia;
    if (theme === "dracula") return dracula;
    if (theme === "xcodeDark") return xcodeDark;
    if (theme === "githubDark") return githubDark;
    if (theme === "vscodeDark") return vscodeDark;
    if (theme === "xcodeLight") return xcodeLight;
    if (theme === "githubLight") return githubLight;
    if (theme === "duotoneDark") return duotoneDark;
    if (theme === "duotoneLight") return duotoneLight;
    return duotoneLight;
  }, [theme]);

  /**
   * TSX
   */
  return (
    <CodeMirror
      value={code}
      height={codeEditorHeight}
      style={{ fontSize: `${fontSize}px` }}
      theme={selectedTheme}
      extensions={[
        selectedLanguage,
        indentUnit.of(" ".repeat(Number(tabSize))),
        EditorState.tabSize.of(Number(tabSize)),
        // EditorState.changeFilter.of(() => true),
      ]}
      onChange={setCode}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        history: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        searchKeymap: true,
        historyKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
    />
  );
};

export default CodeEditor;
