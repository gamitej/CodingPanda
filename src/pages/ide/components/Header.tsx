// components
import { CodingLangDropdown, CodeDownload, EditorSettings } from "@/components";
// icons
import { CodeIcon } from "@/utils/Icons";

const Header = () => {
  /**
   * TSX
   */
  return (
    <div className="pb-5 pt-4 px-4 border-b dark:border-b-gray-800 flex justify-between">
      <div className="px-2 flex gap-2 items-center">
        <span className="text-2xl text-blue-400">
          <CodeIcon />
        </span>{" "}
        <p className="text-lg text-gray-700 dark:text-gray-300">Online IDE</p>
      </div>
      <div className="flex items-center gap-3">
        <CodeDownload />
        <CodingLangDropdown />
        <EditorSettings />
      </div>
    </div>
  );
};

export default Header;
