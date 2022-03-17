import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const Login = lazy(() => import("../pages/Login"));
const Men = lazy(() => import("../pages/Men"));
const Women = lazy(() => import("../pages/Women"));
const Search = lazy(() => import("../pages/Search"));

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="*" element={<Navigate to="/men" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
