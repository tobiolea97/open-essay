import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./root";
import Write from "../pages/Write";
import Review from "../pages/Review";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "login", element: <Login /> },
        { path: "write", element: <Write /> },
        { path: "review", element: <Review /> }
      ],
    },
  ]);

export default router;