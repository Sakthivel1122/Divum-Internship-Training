import React from "react";
import { Route, Routes } from "react-router-dom";
import TakePic from "../pages/TakePic";
import TakeSamplePhoto from "../pages/TakeSamplePhoto";
import ProctoringLayout from "../layout/ProctoringLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TakePic />} />
      <Route path="/takeSamplePhoto" element={<TakeSamplePhoto />} />
      <Route path="/startTest" element={<ProctoringLayout />} />
    </Routes>
  );
};

export default MainRoutes;
