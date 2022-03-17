import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import PublicRouter from "../routes/PublicRouter";
import PrivateRouter from "../routes/PrivateRouter";
import AppRouter from "../routes/AppRouter";
import Login from "../pages/Login";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRouter>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
