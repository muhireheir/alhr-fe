import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "../components/Layout";
import ProcessAuth from "../pages/auth/ProcessAuth";
import Dashboard from "../pages/Dashboard";
import JobPosts from "../pages/JobPosts";
import Candidates from "../pages/Candidates";

const browserRouter = createBrowserRouter([

  {
    path: "/auth/redirect",
    element: <ProcessAuth />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children:[{
      path:"",
      element:<Dashboard />
    },{
      path:"jobs",
      element:<JobPosts />
    },{
      path:"candidates",
      element:<Candidates />
    }]
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
