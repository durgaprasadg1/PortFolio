

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  return (
    <nav className=" text-white shadow-2xl sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg md:text-xl font-semibold">Durgaprasad</h2>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-indigo-200 transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-indigo-200 transition-colors">Contact</Link>
          <Link to="/project" className="text-white hover:text-indigo-200 transition-colors">Project</Link>
        </div>

        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-3 rounded-md text-white hover:bg-indigo-600 focus:outline-none"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-700 border-t ">
          <div className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium">
            <Link to="/" className="text-white hover:text-indigo-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-white hover:text-indigo-200" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="text-white hover:text-indigo-200" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/project" className="text-white hover:text-indigo-200" onClick={() => setIsOpen(false)}>Project</Link>
          </div>
        </div>
      )}
    </nav>
  );
}


