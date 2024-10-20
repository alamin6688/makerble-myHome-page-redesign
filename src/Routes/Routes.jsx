import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MyHome from "../Pages/MyHome/MyHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MyHome></MyHome>,
      },
    ],
  },
]);
