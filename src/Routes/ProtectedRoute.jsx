import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Bars } from "react-loader-spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation;

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
