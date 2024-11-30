import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary py-4 md:py-8 relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden px-4">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-black"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center space-x-8 lg:space-x-16 text-gray-500 text-lg">
        <li>
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-black font-light"
                : "hover:text-black"
            }`}
          >
            Home Page
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`${
              location.pathname === "/projects"
                ? "text-black font-light"
                : "hover:text-black"
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "text-black font-light"
                : "hover:text-black"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact"
                ? "text-black font-light"
                : "hover:text-black"
            }`}
          >
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen ? (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-secondary py-4 flex flex-col items-center space-y-4 shadow-lg">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-black font-light"
                  : "hover:text-black"
              }`}
              onClick={toggleMenu}
            >
              Home Page
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${
                location.pathname === "/projects"
                  ? "text-black font-light"
                  : "hover:text-black"
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about"
                  ? "text-black font-light"
                  : "hover:text-black"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-black font-light"
                  : "hover:text-black"
              }`}
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
