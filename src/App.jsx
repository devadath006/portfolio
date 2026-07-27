import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <Footer />
      <Analytics />
    </>
  );
}

export default App;