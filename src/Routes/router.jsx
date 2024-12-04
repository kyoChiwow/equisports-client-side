import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AllEquipments from "../Pages/AllEquipments";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/allequipments",
      element: <AllEquipments></AllEquipments>
    },
  ]);

export default router;