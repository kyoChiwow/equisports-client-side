import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AllEquipments from "../Pages/AllEquipments";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/allequipments",
      element: <AllEquipments></AllEquipments>
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children:[
        {
          path: "/auth/register",
          element: <Register></Register>,
        },
        {
          path: "/auth/login",
          element: <Login></Login>,
        },
      ]
    },
  ]);

export default router;