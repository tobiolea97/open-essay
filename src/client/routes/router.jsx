import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./root";
import Write from "../pages/Write";
import Review from "../pages/Review";
import Login from "../pages/Login";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "login", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "write", element: <Write /> },
        { path: "review", element: <Review /> }
      ],
    },
  ]);

export default router;