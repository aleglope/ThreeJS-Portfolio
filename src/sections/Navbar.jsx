/* eslint-disable react/prop-types -- NavItems receives the menu's local close callback. */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLocalizedNavLinks from "../hooks/useLocalizedNavLinks.js";
import LanguageToggle from "../components/LanguageToggle.jsx";

const NavItems = ({ onNavigate }) => {
  const navLinks = useLocalizedNavLinks();

  return (
    <ul className="nav-ul max-[879px]:flex-col">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a inline-flex min-h-11 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300" onClick={onNavigate}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuButton = useRef(null);
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
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
      className={`portfolio-motion fixed top-0 left-0 right-0 z-50 bg-black-90 transition-transform duration-300 focus-within:translate-y-0 ${
        isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5 text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            >
              {/* Icono «agl» de la marca: por debajo de 96 px va el icono simplificado */}
              <img
                src="/assets/agl-icono-sobre-oscuro.svg"
                alt=""
                aria-hidden="true"
                width="27"
                height="28"
                className="h-7 w-auto"
              />
              AGonzL
            </button>
            <span className="text-neutral-600">|</span>
            <span className="text-blue-500 font-semibold text-sm">Dev</span>
          </div>
          <button
            ref={menuButton}
            type="button"
            onClick={toggleMenu}
            className="grid min-h-11 min-w-11 place-items-center rounded-sm text-neutral-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 min-[880px]:hidden"
            aria-label={t(isOpen ? "designNavbarUI.closeMenu" : "designNavbarUI.openMenu")}
            aria-expanded={isOpen}
            aria-controls="dev-mobile-menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="w-6 h-6"
            />
          </button>
          <nav className="min-[880px]:flex hidden items-center gap-6">
            <NavItems />
            <button
              onClick={() => navigate("/design")}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              {t("navbarUI.designPortfolio")}
            </button>
            <LanguageToggle />
          </nav>
        </div>
      </div>

      {isOpen && <div id="dev-mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100dvh-84px)] overflow-y-auto overscroll-contain bg-black-200 backdrop-blur-sm min-[880px]:hidden">
        <nav className="p-5">
          <NavItems onNavigate={() => setIsOpen(false)} />
          <div className="mt-4">
            <button
              onClick={() => { setIsOpen(false); navigate("/design"); }}
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              {t("navbarUI.designPortfolio")}
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <LanguageToggle />
          </div>
        </nav>
      </div>}
    </header>
  );
};

export default Navbar;
