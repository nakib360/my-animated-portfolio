import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import ParticleBackground from "./Particlebackground";

const Root = () => {
  return (
    <div className="relative bg-gray-200">
      <ParticleBackground />
      <div className="relative z-10">
        <div id="home">
          <Home />
        </div>
        <div id="about" className="py-10">
          <About />
        </div>
        <div id="projects" className="py-10">
          <Projects/>
        </div>
      </div>
    </div>
  );
};

export default Root;