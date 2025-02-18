import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

//This componenet is used keep both the creation and update routes private
const PrivateRoute = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="signin" state={{ from: location.pathname }} />
  );
};

export default PrivateRoute;
