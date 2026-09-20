import About from "../Components/About/About";
import Home from "../Components/Home/Home";

const Root = () => {
  return (
    <div className="bg-gray-200">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Root;
