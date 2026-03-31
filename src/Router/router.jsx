import { createBrowserRouter } from "react-router";
import MainLayout from "../Component/Layout/MainLayout";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
