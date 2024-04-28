import Root from "../Layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AllArtsAndCraft from "../Pages/AllArtsAndCraft";
import AddCraft from "../Pages/AddCraft";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import ProtectedRoute from "./ProtectedRoute";
import Details from "../SubPages/Details";
import { baseURL } from "../hooks/url";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: (
          <ProtectedRoute>
            <Details></Details>
          </ProtectedRoute>
        ),
        loader: () => fetch("http://localhost:5000/arts")
      },
      // {
      //   path: "/cardDetails/:id",
      //   element: (
      //     <PrivateRoute>
      //       <CardDetails></CardDetails>
      //     </PrivateRoute>
      //   ),
      //   loader: () => fetch("/data.json"),
      // },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArt",
        element: <AllArtsAndCraft></AllArtsAndCraft>,
      },
      {
        path: "/addCraft",
        element: (
          <ProtectedRoute>
            <AddCraft></AddCraft>
          </ProtectedRoute>
        ),
      },
      {
        path: "/myArt",
        element: (
          <ProtectedRoute>
            <MyArtAndCraftList></MyArtAndCraftList>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default Route;
