// components
import { CodingLangDropdown } from "@/components";
// icons
import { CodeIcon } from "@/utils/Icons";

const Header = () => {
  /**
   * TSX
   */
  return (
    <div className="px-2 border-b-2 mb-0">
      <div className="py-1 px-2 flex gap-2 items-center">
        <span className="text-2xl text-blue-400">
          <CodeIcon />
        </span>{" "}
        <p className="text-lg text-gray-700">Online IDE</p>
      </div>
      <div className="pt-1 pb-2">
        <CodingLangDropdown />
      </div>
    </div>
  );
};

export default Header;
