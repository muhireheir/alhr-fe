import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthChecker from "../components/AuthChecker";
import ProcessAuth from "../pages/auth/ProcessAuth";
import Dashboard from "../pages/Dashboard";
import JobPosts from "../pages/JobPosts";
import Candidates from "../pages/candidates/Candidates";
import { NotFound } from "../pages/NotFound";
import Login from "../pages/auth/Login";
import AddCandidate from "../pages/candidates/AddCandidate";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthChecker />,
    children:[{
      path:"",
      element:<Dashboard />
    },{
      path:"jobs",
      element:<JobPosts />
    },{
      path:"candidates",
      element:<Candidates />
    },
    {
      path: "/candidates/add",
      element: <AddCandidate />,
    }
  ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth/redirect",
    element: <ProcessAuth />,
  }
  ,{
    path:"*",
    element:<NotFound />
  }
]);
const RoutesProvider = () => {

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
};
export default RoutesProvider;
