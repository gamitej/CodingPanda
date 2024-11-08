import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";

// configuration
import { EditorState } from "@codemirror/state";
import { indentUnit } from "@codemirror/language";

// data & type
import { getTheme } from "./data/Theme";
import { CodeEditorProps, LanguagesTypes } from "./type";
import { getSelectedLanguageForm } from "./data/Langauges";

// redux
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
    return getSelectedLanguageForm({ type, language } as LanguagesTypes);
  }, [language, type]);

  const selectedTheme = useMemo(() => {
    return getTheme(theme);
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
