import Root from "../Layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<></>,
    children:[
        {
          path:'/login',
          element:<Login></Login>
        }
    ]
  },
]);

export default Route;
