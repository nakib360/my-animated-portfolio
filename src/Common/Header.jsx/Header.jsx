import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineHome } from "react-icons/hi2";
import { FaUserAstronaut, FaLaptopCode } from "react-icons/fa6";
import { PiHandshake } from "react-icons/pi";
import { HiOutlineDownload } from "react-icons/hi";
import logo from "../../assets/nakib uddin modern logo.png";

const rout = [
  { id: 1, name: "Home", path: "#home", icon: <HiOutlineHome /> },
  { id: 2, name: "About", path: "#about", icon: <FaUserAstronaut /> },
  { id: 3, name: "Projects", path: "#projects", icon: <FaLaptopCode /> },
  { id: 4, name: "Contact", path: "#contact", icon: <PiHandshake /> },
];

const Header = () => {
  const [active, setActive] = useState(window.location.hash || "#home");
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#home");
    }

    const sections = rout
      .map((route) => document.querySelector(route.path))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      const homeSection = document.querySelector("#home");

      /*
        Floating dock will appear ONLY after
        the entire Home section has been crossed.
      */
      if (homeSection) {
        const homeBottom =
          homeSection.getBoundingClientRect().bottom;

        setIsFloating(homeBottom <= 0);
      }

      let currentSection = "#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = `#${section.id}`;
        }
      });

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) {
        currentSection = "#contact";
      }

      setActive(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    const handleHashChange = () => {
      setActive(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();

    const section = document.querySelector(path);

    if (!section) return;

    const offset = 100;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.pushState(null, "", path);
    setActive(path);
  };

  return (
    <>
      {/* =====================================================
          NORMAL HEADER
      ===================================================== */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex items-center justify-between
          px-4 py-3
          sm:px-6 sm:py-4
          md:flex-row md:px-8
          lg:px-10
        "
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavigation(e, "#home")}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.35,
            delay: 0.05,
            ease: "easeOut",
          }}
          className="z-10 shrink-0 whitespace-nowrap text-base font-bold sm:text-lg"
        >
          <img
            className="h-12 sm:h-14 md:h-15"
            src={logo}
            alt="Nakib360 logo"
          />
        </motion.a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav
          className="
            hidden
            w-full
            items-center
            justify-between
            gap-2
            md:flex
            md:w-auto
            md:gap-6
            lg:gap-8
          "
        >
          {rout.map((route, index) => {
            const isActive = active === route.path;

            return (
              <motion.a
                key={route.id}
                href={route.path}
                onClick={(e) => handleNavigation(e, route.path)}
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.08 + index * 0.04,
                  ease: "easeOut",
                }}
                className={`group relative flex items-center gap-1 whitespace-nowrap px-2 py-1.5 text-xs transition-colors duration-300 sm:gap-1.5 sm:text-sm ${
                  isActive
                    ? "text-green-200"
                    : "text-white hover:text-green-200"
                }`}
              >
                <span className="text-sm sm:text-base">
                  {route.icon}
                </span>

                <span>{route.name}</span>

                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-green-200 transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            );
          })}
        </nav>

        {/* =====================================================
            DOWNLOAD CV
            transition-all -> transition-colors (blink fix)
        ===================================================== */}
        <motion.a
          href="/CV.pdf"
          download
          aria-label="Download CV"
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            z-10
            flex shrink-0 items-center justify-center
            gap-2
            rounded-full
            border border-green-200
            px-3 py-2
            text-xs font-medium
            text-green-200
            transition-colors
            hover:bg-green-200
            hover:text-black
            sm:px-4
            md:py-2
            md:text-sm
          "
        >
          <HiOutlineDownload className="text-base sm:text-lg" />

          <span>Download CV</span>
        </motion.a>
      </motion.header>

      {/* =====================================================
          MOBILE FLOATING NAVIGATION
          Only visible below md
      ===================================================== */}
      {createPortal(
        <motion.div
          initial={false}
          animate={
            isFloating
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: 70,
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            bottom-4
            left-1/2
            z-9999
            w-full
            -translate-x-1/2
            px-10
            md:hidden
          "
          style={{
            pointerEvents: isFloating ? "auto" : "none",
          }}
        >
          <nav
            className="
              flex
              items-center
              justify-around
              gap-1
              rounded-full
              bg-white
              p-1.5
              shadow-xl
              shadow-black/20
            "
          >
            {rout.map((route) => {
              const isActive = active === route.path;

              return (
                <a
                  key={route.id}
                  href={route.path}
                  onClick={(e) =>
                    handleNavigation(e, route.path)
                  }
                  aria-label={route.name}
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    text-lg
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {route.icon}
                </a>
              );
            })}
          </nav>
        </motion.div>,

        document.body
      )}

      {/* =====================================================
          DESKTOP FLOATING NAVIGATION
          Only visible md and above
      ===================================================== */}
      {createPortal(
        <motion.div
          initial={false}
          animate={
            isFloating
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: -70,
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            fixed
            inset-x-0
            top-0
            z-9999
            hidden
            justify-center
            md:flex
          "
        >
          <nav
            className="
              pointer-events-auto
              mt-4
              flex
              items-center
              gap-1
              rounded-full
              bg-white
              p-1.5
              shadow-xl
              shadow-black/20
            "
          >
            {rout.map((route) => {
              const isActive = active === route.path;

              return (
                <a
                  key={route.id}
                  href={route.path}
                  onClick={(e) =>
                    handleNavigation(e, route.path)
                  }
                  className={`
                    flex
                    items-center
                    gap-1
                    whitespace-nowrap
                    rounded-full
                    px-3
                    py-2
                    text-xs
                    transition-all
                    duration-300
                    sm:gap-1.5
                    sm:px-4
                    sm:text-sm

                    ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <span className="text-sm sm:text-base">
                    {route.icon}
                  </span>

                  <span>{route.name}</span>
                </a>
              );
            })}
          </nav>
        </motion.div>,

        document.body
      )}
    </>
  );
};

export default Header;