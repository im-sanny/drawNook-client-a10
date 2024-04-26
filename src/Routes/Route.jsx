import Root from "../Layout/Root";
import { createBrowserRouter } from "react-router-dom";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<></>,
    children:[
        
    ]
  },
]);

export default Route;
