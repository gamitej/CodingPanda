import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  /**
   * TSX
   */
  return (
    <div className="min-h-[calc(100vh-4rem)] dark:bg-dark-medium">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
