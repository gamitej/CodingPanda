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
        theme="githubLight"
      />
    </div>
  );
};

export default Editor;
