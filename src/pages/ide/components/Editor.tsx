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
        codeEditorHeight="100%"
      />
    </div>
  );
};

export default Editor;
