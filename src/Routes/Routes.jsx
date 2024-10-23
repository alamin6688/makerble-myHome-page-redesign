import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Newsfeed from "../Pages/Newsfeed/Newsfeed";
import Events from "../Pages/Events/Events";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Newsfeed />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);
