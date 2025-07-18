
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md shadow-md text-gray-950">
      <div className="relative bg-white">
        <div className="container m-auto flex justify-between items-center p-5">
          <Link to="/" className="text-blue-500 font-bold text-2xl">
            KdeyXD
          </Link>
          <nav className="hidden md:flex space-x-4">
            {NAV_ITEMS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg ${isActive(to) ? "bg-indigo-700 text-white" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          className={`flex flex-col bg-white w-full p-3 -z-10 md:hidden space-y-4 absolute transition-all duration-400 ease-in ${
            menuOpen ? "top-16" : "-top-60"
          }`}
        >
          {NAV_ITEMS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`block px-5 py-2 rounded-lg ${isActive(to) ? "bg-indigo-700 text-white" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
