import { Divider, Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "./Sections/AboutMe";
import Hero from "./Sections/Hero/Hero";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Espaçamento para compensar a navbar fixa */}
      <Box sx={{ height: '70px' }} />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />      <Contact />
      <Footer />
    </>
  );
};

export default Home;
