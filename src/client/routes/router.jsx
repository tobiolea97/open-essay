import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./root";
import Write from "../pages/Write";
import Review from "../pages/Review";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { PrivateRoute } from "./privateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "login", element: <Login /> },
        { path: '/', element: <PrivateRoute element="/home" /> },
        { path: "home", element: <PrivateRoute element={<Home />} />},
        { path: "write", element: <PrivateRoute element={<Write />} /> },
        { path: "review", element: <PrivateRoute element={<Review />} /> },
        { path: "*", element: <PrivateRoute element="/home" />}
      ],
    },
  ]);

export default router;