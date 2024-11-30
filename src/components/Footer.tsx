import * as React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 py-4 sm:py-7 mt-6 sm:mt-10 font-bold bg-secondary">
      <div className="flex flex-col items-center space-y-4 sm:space-y-6 pt-4 sm:pt-7">
        <h2 className="text-lg sm:text-lg font-light text-center">
          © 2024 Syarif Maulana, All Rights Reserved
        </h2>
        <div className="flex space-x-4 sm:space-x-6">
          <Link
            to="https://www.instagram.com/fffeihc._/profilecard/?igsh=emNsa3BmdGIxN2h0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/syarif-maulana67"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          </Link>
          <Link
            to="https://github.com/Chiefff67"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
