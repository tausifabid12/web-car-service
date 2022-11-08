import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CartDetails from "../PageComponents/CartDetails/CartDetails";
import CheckOut from "../PageComponents/CheckOut/CheckOut";
import Home from "../PageComponents/Home/Home";
import Login from "../PageComponents/Login/Login";
import SignUp from "../PageComponents/SignUp/SignUp";
import Services from "../SharedComponents/Services/Services";
import PrivateRoute from "./PrivateRoute";

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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/checkOut/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <CheckOut />,
      },
      {
        path: "/cartDetails",
        element: (
          <PrivateRoute>
            <CartDetails />
          </PrivateRoute>
        ),
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
