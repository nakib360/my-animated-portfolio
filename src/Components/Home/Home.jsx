import Header from "../../Common/Header.jsx/Header";
import CyberpunkGlowBackground from "./CyberpunkGlowBackground";
import Author from "../../assets/author.png";

const Home = () => {
  return (
    <>
      <div className="relative isolate w-full overflow-hidden text-white">
        <CyberpunkGlowBackground />
        {/* Grid - Background */}
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="160"
              height="160"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 160 0 L 0 0 0 160"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M 0 -6 L 0 6 M -6 0 L 6 0"
                stroke="white"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 min-h-150 md:min-h-162.5">
          <Header />
          {/* Big background NAKIB */}
          <p
            className="pointer-events-none text-[7rem] md:text-[15rem] lg:text-[20rem] absolute left-0 top-[25%] md:top-[14%] w-full select-none whitespace-nowrap bg-linear-to-b from-white/30 via-white/10 to-white/5 bg-clip-text text-center font-bold leading-none tracking-tight text-transparent sm:top-[11%] lg:top-[9%]"
          >
            NAKIB
          </p>
          <img
            className="absolute bottom-0 left-1/2 z-10 w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom h-112 sm:h-120 md:h-128 lg:h-140"
            src={Author}
            alt="Nakib"
            draggable={false}
            fetchPriority="high"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-15 h-[28svh] backdrop-blur-xs sm:h-[32svh] lg:h-[36svh]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))",
              WebkitMaskImage:
                "linear-gradient(to top, black 0%, black 35%, transparent 100%)",
              maskImage:
                "linear-gradient(to top, black 0%, black 35%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-3 left-2 z-20 flex flex-col md:left-10 lg:left-80 justify-start items-start">
            {/* Subheading */}
            <p
              className="pointer-events-none text-[1.1rem] md:text-[1.7rem] lg:text-[2rem] select-none whitespace-nowrap font-medium uppercase leading-none tracking-[0.3em] text-white/70"
            >
              Developer
            </p>

            {/* Main heading */}
            <p
              className="pointer-events-none text-[4rem] md:text-[6rem] lg:text-[7rem] select-none whitespace-nowrap font-bold leading-none tracking-tight text-white ml-[-0.06em]"
            >
              NAKIB
            </p>
          </div>
          <div className="absolute right-3 bottom-20 md:right-15 md:bottom-30 z-20 w-full max-w-1/2 md:max-w-1/2 lg:max-w-1/3 rounded-tl-xl rounded-br-xl  bg-white/10 p-2 md:p-3 uppercase shadow-xs shadow-black/20 backdrop-blur-md">
            <p className="text-white font-semibold text-justify text-xs md:text-sm">
              Welcome! I'm Nakib Uddin, a MERN stack developer who builds fast,
              clean, and reliable web applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
