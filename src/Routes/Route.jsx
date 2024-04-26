import Root from "../Layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<></>,
    children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:'/',
          element:<Home></Home>,
        }
    ]
  },
]);

export default Route;
