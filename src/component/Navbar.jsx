import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-zinc-900/95 backdrop-blur-md border-b border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg md:text-xl font-semibold text-white">
            &lt;Durgaprasad/&gt;
          </h2>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-md font-medium">
          <Link
            to="/"
            className="nav-link text-white transition-colors transform hover:scale-105 duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link text-white transition-colors transform hover:scale-105 duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-link text-white transition-colors transform hover:scale-105 duration-200"
          >
            Contact
          </Link>
          <Link
            to="/project"
            className="nav-link text-white transition-colors transform hover:scale-105 duration-200"
          >
            Project
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-3 rounded-md text-white hover:bg-indigo-600 focus:outline-none"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t ">
          <div className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium">
            <Link
              to="/"
              className="text-white hover:text-indigo-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-indigo-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-indigo-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/project"
              className="text-white hover:text-indigo-200"
              onClick={() => setIsOpen(false)}
            >
              Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
