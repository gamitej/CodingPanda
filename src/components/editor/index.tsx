// icons
import { CodeIcon } from "@/utils/Icons";

// components
import CodeEditor from "./CodeEditor";
import { CodingLangDropdown } from "@/components";

const Editor = () => {
  /**
   * TSX
   */
  return (
    <div className="bg-white pt-1 pb-6 rounded-2xl border w-[50%]">
      {/*================= HEADER ==================*/}
      <div className="px-2 border-b-2 mb-0">
        <div className="py-1 px-2 flex gap-2 items-center">
          <span className="text-2xl text-green-400">
            <CodeIcon />
          </span>{" "}
          <p className="text-lg text-gray-700">Code</p>
        </div>
        <div className="pt-1 pb-2">
          <CodingLangDropdown />
        </div>
      </div>

      {/*================= EDITOR ==================*/}
      <CodeEditor
        code=""
        type="coding"
        language="python"
        setCode={() => {}}
        theme="githubLight"
      />
      <div></div>
    </div>
  );
};

export default Editor;
