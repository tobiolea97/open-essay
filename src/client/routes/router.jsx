import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./root";
import Write from "../pages/Write";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "write", element: <Write /> }
      ],
    },
  ]);

export default router;