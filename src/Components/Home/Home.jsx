import Header from "../../Common/Header.jsx/Header";
import CyberpunkGlowBackground from "./CyberpunkGlowBackground";
import Author from "../../assets/author.png";
import { motion } from "motion/react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

/* ---------- Social links ---------- */
const socials = [
  { name: "Facebook", href: "https://facebook.com/your-username", Icon: FaFacebookF },
  { name: "GitHub", href: "https://github.com/your-username", Icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-username", Icon: FaLinkedinIn },
];

/* ---------- Welcome card + icons animation variants ---------- */
const CARD_DURATION = 1; // seconds - icons start exactly when the card finishes

// Outer wrapper: only triggers and passes the "show" label down
const wrapper = { hidden: {}, show: {} };

// Welcome card
const card = {
  hidden: { x: 10, opacity: 0, filter: "blur(10px)" },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: CARD_DURATION },
  },
};

// Icon list: waits for the card, then staggers the icons
const iconList = {
  hidden: {},
  show: {
    transition: { delayChildren: CARD_DURATION, staggerChildren: 0.15 },
  },
};

// Each icon: comes from below with blur + opacity 0
const icon = {
  hidden: { y: 24, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            //viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="pointer-events-none text-[7rem] md:text-[15rem] lg:text-[20rem] absolute left-0 top-[25%] md:top-[14%] w-full select-none whitespace-nowrap bg-linear-to-b from-white/30 via-white/10 to-white/5 bg-clip-text text-center font-bold leading-none tracking-tight text-transparent sm:top-[11%] lg:top-[9%]"
          >
            NAKIB
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className="absolute inset-x-0 bottom-0 z-10 flex justify-center h-112 sm:h-120 md:h-128 lg:h-140"
          >
            <motion.img
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full w-auto max-w-none select-none object-contain object-bottom"
              src={Author}
              alt="Nakib"
              draggable={false}
              fetchPriority="high"
            />
          </motion.div>

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
            <motion.p
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              //viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="pointer-events-none text-[1.1rem] md:text-[1.7rem] lg:text-[2rem] select-none whitespace-nowrap font-medium uppercase leading-none tracking-[0.3em] text-white/70"
            >
              Developer
            </motion.p>

            {/* Main heading */}
            <motion.p
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              //viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="pointer-events-none text-[4rem] md:text-[6rem] lg:text-[7rem] select-none whitespace-nowrap font-bold leading-none tracking-tight text-white ml-[-0.06em]"
            >
              NAKIB
            </motion.p>
          </div>

          {/* Welcome card + social icons */}
          <motion.div
            variants={wrapper}
            initial="hidden"
            whileInView="show"
            className="absolute right-3 bottom-20 md:right-15 md:bottom-30 z-20 w-full max-w-1/2 lg:max-w-1/3"
          >
            <motion.div
              variants={card}
              className="rounded-tl-xl rounded-br-xl bg-white/10 p-2 md:p-3 uppercase shadow-xs shadow-black/20 backdrop-blur-md"
            >
              <p className="text-white font-semibold text-justify text-xs md:text-sm">
                Welcome! I'm Nakib Uddin, a MERN stack developer who builds fast,
                clean, and reliable web applications.
              </p>
            </motion.div>

            <motion.ul
              variants={iconList}
              className="relative z-10 -mt-2 md:-mt-3 flex justify-start gap-2 pl-3"
            >
              {socials.map(({ name, href, Icon }) => (
                <li key={name}>
                  <motion.a
                    variants={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex size-8 md:size-10 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-md transition-[translate,background-color,color] duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                  >
                    <Icon className="text-base" />
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;