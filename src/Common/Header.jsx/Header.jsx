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
    <header className="relative flex items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      {/* Logo */}
      <NavLink
        to="/"
        className="z-10 text-lg font-bold whitespace-nowrap sm:text-xl"
      >
        Nakib Uddin
      </NavLink>

      {/* Centered Navigation */}
      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14">
        {rout.map((route) => (
          <NavLink
            key={route.id}
            to={route.path}
            className={({ isActive }) =>
              `group relative flex items-center gap-1.5 whitespace-nowrap px-2 py-2 transition-colors duration-300 sm:gap-2 ${
                isActive
                  ? "text-blue-500"
                  : "text-white hover:text-blue-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="text-base sm:text-lg">
                  {route.icon}
                </span>

                <span className="text-sm sm:text-base">
                  {route.name}
                </span>

                {/* Custom underline */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 ${
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
