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
        { path: "write", element: <PrivateRoute element={<Write />} /> },
        { path: "review", element: <PrivateRoute element={<Review />} /> },
        { path: '/', element: <PrivateRoute element={<Home />} /> },
        { path: "*", element: <PrivateRoute element={<Home />} />}
      ],
    },
  ]);

export default router;