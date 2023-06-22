import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const privateUser = () => {
    const data = localStorage.getItem("User");
    if (data) return true;
    else return false;
  };

  if (privateUser()) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
