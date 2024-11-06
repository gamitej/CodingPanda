import { CodeEditor } from "@/components";

const Editor = () => {
  /**
   * TSX
   */
  return (
    <div>
      <CodeEditor
        code=""
        type="sql"
        language="mysql"
        setCode={() => {}}
        theme="githubLight"
      />
    </div>
  );
};

export default Editor;
