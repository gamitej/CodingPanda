import { useState } from "react";
import Markdown from "react-markdown";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import remarkGfm from "remark-gfm";

const MarkdownEditorComponent = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  // Function to handle content changes in the editor
  const handleEditorChange = ({ text }: any) => {
    setMarkdownContent(text);
  };

  /**
   * TSX
   */
  return (
    <MarkdownEditor
      value={markdownContent}
      onChange={handleEditorChange}
      style={{ height: "calc(100vh - 4rem)" }}
      renderHTML={(text) => {
        return <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>;
      }}
    />
  );
};

export default MarkdownEditorComponent;
