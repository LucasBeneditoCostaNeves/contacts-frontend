import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageLogin } from "../pages/login/index";
import { PageRegister } from "../pages/register";
import { PageProfile } from "../pages/profile";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/register" element={<PageRegister />} />
      <Route path="/profile" element={<PageProfile />} />
    </Routes>
  );
};
