import { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { FaUserAstronaut, FaLaptopCode } from "react-icons/fa6";
import { PiHandshake } from "react-icons/pi";
import logo from "../../assets/nakib360's logo.svg";

const rout = [
  { id: 1, name: "Home", path: "#home", icon: <HiOutlineHome /> },
  { id: 2, name: "About", path: "#about", icon: <FaUserAstronaut /> },
  { id: 3, name: "Projects", path: "#projects", icon: <FaLaptopCode /> },
  { id: 4, name: "Contact", path: "#contact", icon: <PiHandshake /> },
];

const Header = () => {
  const [active, setActive] = useState(window.location.hash || "#home");

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#home");
    }
    const sections = rout
      .map((route) => document.querySelector(route.path))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = `#${section.id}`;
        }
      });

      // Page-এর একদম নিচে গেলে Contact active
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) {
        currentSection = "#contact";
      }

      setActive(currentSection);
    };

    // Initial detection
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    // Browser URL hash manually change করলে
    const handleHashChange = () => {
      setActive(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="relative flex flex-col gap-2 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
      {/* Logo */}
      <a
        href="#home"
        onClick={() => setActive("#home")}
        className="z-10 whitespace-nowrap text-base font-bold sm:text-lg"
      >
        <img className="h-15" src={logo} alt="Nakib360 logo" />
      </a>

      {/* Navigation */}
      <nav className="flex w-full items-center justify-between md:absolute md:left-1/2 md:w-auto md:-translate-x-1/2 md:justify-center md:gap-6 lg:gap-10">
        {rout.map((route) => {
          const isActive = active === route.path;

          return (
            <a
              key={route.id}
              href={route.path}
              onClick={() => setActive(route.path)}
              className={`group relative flex items-center gap-1 whitespace-nowrap px-2 py-1.5 text-xs transition-colors duration-300 sm:gap-1.5 sm:text-sm ${
                isActive ? "text-green-200" : "text-white hover:text-green-200"
              }`}
            >
              <span className="text-sm sm:text-base">{route.icon}</span>

              <span>{route.name}</span>

              {/* Custom underline */}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-green-200 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
