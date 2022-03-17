import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PublicRouter = ({ children }) => {
  const { log } = useContext(AuthContext);

  return !log.log ? children : <Navigate to="/men" />;
};

export default PublicRouter;
