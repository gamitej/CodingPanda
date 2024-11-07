import { CodeEditor } from "@/components";

const Editor = () => {
  /**
   * TSX
   */
  return (
    <div>
      <CodeEditor
        code=""
        type="coding"
        language="python"
        setCode={() => {}}
        codeEditorHeight="80vh"
      />
    </div>
  );
};

export default Editor;
