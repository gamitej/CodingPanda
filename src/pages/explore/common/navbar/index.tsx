import { Link } from "react-router-dom";
// components
import { LightDarkMode } from "@/components";

const ExploreNavbar = () => {
  /**
   * TSX
   */
  return (
    <div className="flex justify-between items-center h-[4rem] px-[8rem] bg-light dark:bg-dark-medium border-b dark:border-b-gray-800">
      <div>
        <Link
          to="/"
          className="text-xl text-gray-700 dark:text-white font-poppins"
          style={{ fontWeight: 600 }}
        >
          Coding
          <span className="text-blue-600 ml-[1px] dark:text-blue-400">
            Panda
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 items-center text-gray-500  dark:text-gray-300 text-[15px] select-none pr-6 border-r dark:border-gray-700">
          <Link to="online-ide" className="cursor-pointer">
            Online IDE
          </Link>
          <Link to="/problems" className="cursor-pointer">
            Problems
          </Link>
        </ul>
        <ul className="flex gap-6 items-center  text-gray-700 dark:text-white text-md select-none pl-6">
          <LightDarkMode />
        </ul>
      </div>
    </div>
  );
};

export default ExploreNavbar;
