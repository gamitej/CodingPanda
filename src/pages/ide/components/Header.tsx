// components
import { CodingLangDropdown } from "@/components";
// icons
import { CodeIcon } from "@/utils/Icons";

const Header = () => {
  /**
   * TSX
   */
  return (
    <div className="pb-2 pt-1 px-4 border-b-2 flex justify-between">
      <div className="px-2 flex gap-2 items-center">
        <span className="text-2xl text-blue-400">
          <CodeIcon />
        </span>{" "}
        <p className="text-lg text-gray-700">Online IDE</p>
      </div>
      <div>
        <CodingLangDropdown />
      </div>
    </div>
  );
};

export default Header;
