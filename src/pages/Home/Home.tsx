import { Divider } from "@mui/material";
import Navbar from "../../components/Navbar";
import About from "./Sections/AboutMe";
import Hero from "./Sections/Hero/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <About />
    </>
  );
};

export default Home;
