import { Route, Routes } from "react-router";
import AboutMe from "../pages/aboutme/AboutMe";
import ContactPage from "../pages/contact/Contact";
import IndexPage from "../pages/index/IndexPage";
import Projects from "../pages/projects/Projects";

export default function DefaultRouter(params) {
  return (
    <Routes>
      <Route path="" element={<IndexPage />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="project" element={<Projects />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
  );
}
