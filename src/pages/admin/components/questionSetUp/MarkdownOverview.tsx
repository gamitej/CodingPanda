import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
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
    <div className="markdown-editor-container">
      <div className="editor">
        <MarkdownEditor
          value={markdownContent}
          style={{ height: "400px" }}
          onChange={handleEditorChange}
          renderHTML={(text) => (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          )}
        />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <div className="markdown-preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditorComponent;
