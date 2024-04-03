import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./root";
import Write from "../pages/Write";
import Review from "../pages/Review";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "write", element: <Write /> },
        { path: "review", element: <Review /> }
      ],
    },
  ]);

export default router;