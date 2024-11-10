import { useDispatch, useSelector } from "react-redux";
// libs
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownEditor from "react-markdown-editor-lite";
// redux
import {
  getMarkDownEditorText,
  setMarkDownEditorText,
} from "@/redux/admin/markDownSlice";

const MarkdownEditorComponent = () => {
  const dispatch = useDispatch();
  const markdownContent = useSelector(getMarkDownEditorText);

  const handleEditorChange = ({ text }: { text: string }) => {
    dispatch(setMarkDownEditorText(text));
  };

  /**
   * TSX
   */
  return (
    <MarkdownEditor
      value={markdownContent}
      onChange={handleEditorChange}
      style={{ height: "calc(100vh - 10rem)" }}
      renderHTML={(text) => {
        return <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>;
      }}
    />
  );
};

export default MarkdownEditorComponent;
