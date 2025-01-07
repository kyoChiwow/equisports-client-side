import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import HomeLayout from "../Layouts/HomeLayout";
import AddEquipment from "../Pages/AddEquipment";
import AllEquipments from "../Pages/AllEquipments";
import Error404 from "../Pages/Error404";
import Login from "../Pages/Login";
import MyEquipment from "../Pages/MyEquipment";
import Register from "../Pages/Register";
import UpdateProduct from "../Pages/UpdateProduct";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/about",
    element: <AboutUs></AboutUs>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/support",
    element: <Support></Support>
  },
  {
    path: "/allequipments",
    element: <AllEquipments></AllEquipments>,
    loader: () =>
      fetch("https://assignment-10-server-theta-one.vercel.app/products"),
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
    path: "/myequipment",
    element: (
      <PrivateRoute>
        <MyEquipment></MyEquipment>
      </PrivateRoute>
    ),
  },
  {
    path: "/products/:id",
    element: <ViewDetails></ViewDetails>,
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-server-theta-one.vercel.app/products/${params.id}`
      ),
  },
  {
    path: "/updateproduct/:id",
    element: (
      <PrivateRoute>
        <UpdateProduct></UpdateProduct>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-server-theta-one.vercel.app/products/${params.id}`
      ),
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
