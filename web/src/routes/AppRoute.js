import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ScannerPage from "../pages/ScannerPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/scanner" element={<ScannerPage/>} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoute;
