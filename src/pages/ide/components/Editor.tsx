import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { CodeEditor } from "@/components";
// data
// redux
import {
  getCodingCode,
  getCodingLang,
  setCodeForCoding,
} from "@/redux/editor/editorSlice";

const Editor = () => {
  const dispatch = useDispatch();

  const code = useSelector(getCodingCode);
  const language = useSelector(getCodingLang);

  const handleCodeChange = useCallback(
    (code: string) => {
      dispatch(setCodeForCoding(code));
    },
    [dispatch]
  );

  console.log({ code });

  /**
   * TSX
   */
  return (
    <div>
      <CodeEditor
        type="coding"
        code={code}
        language={language}
        codeEditorHeight="80vh"
        setCode={handleCodeChange}
      />
    </div>
  );
};

export default Editor;
