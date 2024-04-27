import Root from "../Layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AllArtsAndCraft from "../Pages/AllArtsAndCraft";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        },
        {
          path:'/allArt',
          element:<AllArtsAndCraft></AllArtsAndCraft>,
        }
    ]
  },
]);

export default Route;
