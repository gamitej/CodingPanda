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

// admin
const AdminLayoutPage = lazy(() => import("@/pages/admin/components/layout"));
const AdminPage = lazy(() => import("@/pages/admin"));
const AdminQuestionSetupPage = lazy(
  () => import("@/pages/admin/components/questionSetUp")
);

// page not found
const NotFoundPage = lazy(() => import("@/pages/notFound/PageNotFound"));

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <ExploreLayout />,
      children: [
        {
          index: true,
          element: <ExploreMain />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "online-ide",
          element: <IdePage />,
        },
        {
          path: "admin",
          element: <AdminLayoutPage />,
          children: [
            {
              index: true,
              element: <AdminPage />,
            },
            {
              path: "setup-question",
              element: <AdminQuestionSetupPage />,
            },
          ],
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
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default Router;
