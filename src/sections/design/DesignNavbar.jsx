import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { designNavLinks } from "../../constants/design.js";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {designNavLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const DesignNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si estamos en la parte superior, siempre mostrar el navbar
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Si scrolleamos hacia abajo, ocultar el navbar
        // Si scrolleamos hacia arriba, mostrar el navbar
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black-90 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
            <span className="text-pink-500 font-semibold text-sm">Design</span>
          </div>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden items-center gap-6">
            <NavItems />
            <button
              onClick={() => navigate("/dev")}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Dev Portfolio
            </button>
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
          <div className="mt-4">
            <button
              onClick={() => navigate("/dev")}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Dev Portfolio
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default DesignNavbar;

