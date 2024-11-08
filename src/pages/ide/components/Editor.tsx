import { useSelector } from "react-redux";
// components
import { CodeEditor } from "@/components";
// data
import { startingTemplates } from "@/data/editor.data";
// redux
import { getCodingLang } from "@/redux/editor/editorSlice";

const Editor = () => {
  const lang = useSelector(getCodingLang);

  /**
   * TSX
   */
  return (
    <div>
      <CodeEditor
        type="coding"
        language="python"
        setCode={() => {}}
        codeEditorHeight="80vh"
        code={startingTemplates[lang]}
      />
    </div>
  );
};

export default Editor;
