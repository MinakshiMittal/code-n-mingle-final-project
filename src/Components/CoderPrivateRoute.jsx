import { Route, Navigate } from "react-router-dom";
import { useCoderAuth } from "../Context";

export const CoderPrivateRoute = ({ path, ...props }) => {
  const { isCoderLogin, coderDetails } = useCoderAuth();
  console.log("login?", isCoderLogin);
  console.log(coderDetails);
  return isCoderLogin ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} to="/coder/login" replace />
  );
};
