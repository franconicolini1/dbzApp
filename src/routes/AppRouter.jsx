import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Search from "../pages/Search";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
