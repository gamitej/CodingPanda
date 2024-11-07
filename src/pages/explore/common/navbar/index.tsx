import { Link } from "react-router-dom";
// components
import { LightDarkMode } from "@/components";

const ExploreNavbar = () => {
  /**
   * TSX
   */
  return (
    <div className="flex justify-between items-center h-[4rem] px-12 bg-white border-b">
      <div>
        <Link
          to="/"
          className="text-xl text-gray-700 font-poppins"
          style={{ fontWeight: 600 }}
        >
          Coding
          <span className="text-blue-600 ml-[1px]">Panda</span>
        </Link>
      </div>
      <div>
        <ul className="flex gap-6 items-center text-gray-700 text-md select-none">
          <LightDarkMode />
          <Link to="online-ide" className="cursor-pointer">
            Online IDE
          </Link>
          <li className="cursor-pointer">Problems</li>
        </ul>
      </div>
    </div>
  );
};

export default ExploreNavbar;
