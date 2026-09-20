import { NavLink } from "react-router";
import { HiOutlineHome } from "react-icons/hi2";
import { FaUserAstronaut, FaLaptopCode } from "react-icons/fa6";
import { PiHandshake } from "react-icons/pi";

const Header = () => {
  const rout = [
    { id: 1, name: "Home", path: "/", icon: <HiOutlineHome /> },
    { id: 2, name: "About", path: "/about", icon: <FaUserAstronaut /> },
    { id: 3, name: "Projects", path: "/projects", icon: <FaLaptopCode /> },
    { id: 4, name: "Contact", path: "/contact", icon: <PiHandshake /> },
  ];

  return (
    <header className="relative flex flex-col gap-2 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
      {/* Logo */}
      <NavLink
        to="/"
        className="z-10 text-base font-bold whitespace-nowrap sm:text-lg"
      >
        Nakib Uddin
      </NavLink>

      {/* Navigation: mobile-এ নিচের সারিতে, md+ এ মাঝখানে */}
      <nav className="flex w-full items-center justify-between md:absolute md:left-1/2 md:w-auto md:-translate-x-1/2 md:justify-center md:gap-6 lg:gap-10">
        {rout.map((route) => (
          <NavLink
            key={route.id}
            to={route.path}
            className={({ isActive }) =>
              `group relative flex items-center gap-1 whitespace-nowrap px-2 py-1.5 text-xs transition-colors duration-300 sm:gap-1.5 sm:text-sm ${
                isActive ? "text-green-200" : "text-white hover:text-green-200"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="text-sm sm:text-base">{route.icon}</span>
                <span>{route.name}</span>

                {/* Custom underline */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-green-200 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
