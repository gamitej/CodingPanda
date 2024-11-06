// Explore.tsx
import { Outlet } from "react-router-dom";
import ExploreNavbar from "../common/navbar";

const ExploreLayout = () => {
  /**
   * TSX
   */
  return (
    <div>
      {/* navbar */}
      <ExploreNavbar />
      <Outlet />
    </div>
  );
};

export default ExploreLayout;
