import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";

import About from "./pages/About";
import AboutMe from "./pages/about/AboutMe";
import Projects from "./pages/about/Projects";

import Contact from "./pages/Contact";
import ReachOut from "./pages/contact/ReachOut";
import ContactForm from "./pages/contact/ContactForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />}>
          <Route path="about-me" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        <Route path="contact" element={<Contact />}>
          <Route path="reach-out" element={<ReachOut />} />
          <Route path="contact-form" element={<ContactForm />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;