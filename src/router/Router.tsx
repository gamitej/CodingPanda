import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// explore
const ExploreLayout = lazy(() => import("@/pages/explore/layout"));
const ExploreMain = lazy(() => import("@/pages/explore/components"));

// coding
const CodingPage = lazy(() => import("@/pages/coding"));
const IdePage = lazy(() => import("@/pages/ide"));
const SqlPage = lazy(() => import("@/pages/sql"));
const ProfilePage = lazy(() => import("@/pages/profile"));

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <ExploreLayout />,
      children: [
        {
          path: "/",
          element: <ExploreMain />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/online-ide",
          element: <IdePage />,
        },
      ],
    },
    {
      path: "/coding",
      element: <CodingPage />,
    },
    {
      path: "/sql",
      element: <SqlPage />,
    },
    {
      path: "*",
      element: (
        <div className="h-[75vh] w-full flex justify-center items-center text-[5rem] text-slate-400">
          404
        </div>
      ),
    },
  ]);

  return routes;
};

export default Router;
