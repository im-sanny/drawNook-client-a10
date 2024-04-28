import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation


    if (loading) {
        return (
          <div className="flex justify-center items-center">
            <h1 className="text-3xl">loading</h1>
          </div>
        )
      }


    if (!user) {
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
      }
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;