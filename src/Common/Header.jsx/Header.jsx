import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { FaUserAstronaut, FaLaptopCode } from "react-icons/fa6";
import { PiHandshake } from "react-icons/pi";
import { HiOutlineDownload } from "react-icons/hi";
import logo from "../../assets/nakib360's logo.svg";

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
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      const homeSection = document.querySelector("#home");

      if (homeSection) {
        setIsFloating(window.scrollY > homeSection.offsetHeight * 0.35);
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
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.pushState(null, "", path);
    setActive(path);
  };

  return (
    <>
      {/* ================= Original Header ================= */}
      <header className="flex flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavigation(e, "#home")}
          className="z-10 whitespace-nowrap text-base font-bold sm:text-lg"
        >
          <img className="h-15" src={logo} alt="Nakib360 logo" />
        </a>

        {/* Original Navigation */}
        <nav className="flex w-full items-center justify-between gap-2 md:w-auto md:gap-6 lg:gap-8">
          {rout.map((route) => {
            const isActive = active === route.path;

            return (
              <a
                key={route.id}
                href={route.path}
                onClick={(e) => handleNavigation(e, route.path)}
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
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Download CV */}
        <a
          href="/cv.pdf"
          download
          className="z-10 flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-green-200 px-4 py-2 text-xs font-medium text-green-200 transition-all hover:bg-green-200 hover:text-black sm:text-sm"
        >
          <HiOutlineDownload className="text-sm sm:text-base" />
          Download CV
        </a>
      </header>

      {/* ================= Floating Navigation ================= */}
      {createPortal(
        <div
          className={`pointer-events-none fixed inset-x-0 top-0 z-2147483647 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isFloating
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <nav className="pointer-events-auto mt-4 flex items-center gap-1 rounded-full bg-white p-1.5 shadow-xl shadow-black/20">
            {rout.map((route) => {
              const isActive = active === route.path;

              return (
                <a
                  key={route.id}
                  href={route.path}
                  onClick={(e) => handleNavigation(e, route.path)}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-xs transition-all duration-300 sm:gap-1.5 sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-sm sm:text-base">
                    {route.icon}
                  </span>

                  <span>{route.name}</span>
                </a>
              );
            })}
          </nav>
        </div>,
        document.body,
      )}
    </>
  );
};

export default Header;