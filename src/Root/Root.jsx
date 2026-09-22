import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import ParticleBackground from "./Particlebackground";

const Root = () => {
  return (
    <div className="relative ">
      <ParticleBackground />
      <div className="relative z-10">
        <div id="home">
          <Home />
        </div>
        <div id="about" className="py-10 scroll-mt-5">
          <About />
        </div>
        <div id="projects" className="py-10 scroll-mt-5">
          <Projects/>
        </div>
      </div>
    </div>
  );
};

export default Root;
