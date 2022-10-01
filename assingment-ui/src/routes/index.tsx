import { Suspense, lazy, ElementType } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};
export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to="/admission" replace />, index: true },
        {
          path: "admission",
          children: [
            {
              element: <Navigate to="/admission/sign-in" replace />,
              index: true,
            },
            { path: "sign-in", element: <Home /> },
          ],
        },
      ],
    },
  ]);
}

const Home = Loadable(lazy(() => import("../app-pages/Main")));