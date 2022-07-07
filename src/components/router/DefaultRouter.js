import { Route, Routes } from "react-router";
import Skills from "../pages/skills/Skills";

export default function DefaultRouter(params) {
  return (
    <Routes>
      <Route path="" element={<div>index</div>} />
      <Route path="skill" element={<Skills />} />
    </Routes>
  );
}
