import { Route, Navigate } from "react-router-dom";
import { useCoderAuth } from "../Context";

export const CoderPrivateRoute = ({ path, ...props }) => {
  const { isUserLogin } = useCoderAuth();
  console.log("login?", isUserLogin);
  return isUserLogin ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} to="/coder/login" replace />
  );
};
