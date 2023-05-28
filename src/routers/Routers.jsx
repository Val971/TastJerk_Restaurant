import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

// const Home = lazy(() => import("../pages/Home"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
};
export default Routers;
