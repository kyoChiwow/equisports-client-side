import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AllEquipments from "../Pages/AllEquipments";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddEquipment from "../Pages/AddEquipment";
import ViewDetails from "../Pages/ViewDetails";
import Error404 from "../Pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/allequipments",
    element: <AllEquipments></AllEquipments>,
    loader: () => fetch("http://localhost:5000/products"),
  },
  {
    path: "/addequipment",
    element: (
      <PrivateRoute>
        <AddEquipment></AddEquipment>
      </PrivateRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <PrivateRoute>
        <ViewDetails></ViewDetails>
      </PrivateRoute>
    ),
    loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
