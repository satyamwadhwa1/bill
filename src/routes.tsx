import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dasboard from "./pages/Dasboard";
import MainLayout from "./layouts/dashboard";

export default function Router() {
  return useRoutes([
    {
      path: "/home",
      element: <MainLayout />,
    },
    {
      path: "/dashboard",
      element: <Dasboard />,
    },
  ]);
}
