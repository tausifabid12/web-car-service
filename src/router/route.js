import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../PageComponents/Home/Home";
import Login from "../PageComponents/Login/Login";
import SignUp from "../PageComponents/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
