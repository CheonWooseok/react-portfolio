import { Route, Routes } from "react-router";
import AboutMe from "../pages/aboutme/AboutMe";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";

export default function DefaultRouter(params) {
  return (
    <Routes>
      <Route path="" element={<div>index</div>} />
      <Route path="skill" element={<Skills />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="project" element={<Projects />} />
    </Routes>
  );
}
