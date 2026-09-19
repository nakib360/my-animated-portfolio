import Header from "../../Common/Header.jsx/Header";
import CyberpunkGlowBackground from "./CyberpunkGlowBackground";

const Home = () => {
  return (
    <>
      <CyberpunkGlowBackground />

      <div className="min-h-screen w-full overflow-hidden text-white">
        <Header />

        <div className="w-full overflow-hidden">
          <p
            className="w-full whitespace-nowrap text-center font-bold leading-none tracking-tight opacity-10"
            style={{
              fontSize: "clamp(4rem, 24vw, 25rem)",
            }}
          >
            NAKIB
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
