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
import UpdateCraft from "../Pages/UpdateCraft";
import CraftDetails from "../SubPages/CraftDetails";
import ViewAllDetails from "../SubPages/ViewAllDetails";

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
        loader: () => fetch(`${baseURL}/arts`),
      },
      // {
      //   path: "/subcategories/:id",
      //   element: (
      //     <ProtectedRoute>
      //       <Subcategory></Subcategory>
      //     </ProtectedRoute>
      //   ),
      //   loader: () => fetch ("/public/data.json")
      //   // loader: () => fetch(`${baseURL}/subcategories
      //   // `),
      // },
      {
        path: "/craftDetails/:id",
        element: (
          <ProtectedRoute>
            <CraftDetails></CraftDetails>
          </ProtectedRoute>
        ),
        loader : () => fetch(`${baseURL}/crafts`)
      },
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
        loader: () => fetch(`${baseURL}/addCrafts`)
      },
      {
        path: "/viewAllDetails/:id",
        element: <ViewAllDetails></ViewAllDetails>,
        loader: () => fetch(`${baseURL}/addCrafts`)
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
      {
        path: "/updateCraft/:id",
        element: (
          <ProtectedRoute>
            <UpdateCraft></UpdateCraft>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default Route;
