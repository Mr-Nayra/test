import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div></div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: <About />,
  },
]);
