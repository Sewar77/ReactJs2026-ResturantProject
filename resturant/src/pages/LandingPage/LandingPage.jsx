//this page is the first page should run when start the project

import Navbar from "../../Components/Navbar/Navbar.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import About from "../../Components/About/About.jsx";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default LandingPage;

//components render
