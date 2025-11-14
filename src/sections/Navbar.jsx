import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            AGonzL
            </button>
            <span className="text-neutral-600">|</span>
            <span className="text-blue-500 font-semibold text-sm">Dev</span>
          </div>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden items-center gap-6">
            <NavItems />
            <button
              onClick={() => navigate("/design")}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Design Portfolio
            </button>
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
          <div className="mt-4">
            <button
              onClick={() => navigate("/design")}
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Design Portfolio
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
