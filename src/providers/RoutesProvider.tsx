import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "../components/Layout";
import ProcessAuth from "../pages/auth/ProcessAuth";

const browserRouter = createBrowserRouter([

  {
    path: "/auth/redirect",
    element: <ProcessAuth />,
  },
  {
    path: "/",
    element: <DashboardLayout />
  },
]);
const RoutesProvider = () => {

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
};
export default RoutesProvider;
