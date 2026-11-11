import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import useLocalizedDesignNav from "../../hooks/useLocalizedDesignNav.js";
import LanguageToggle from "../../components/LanguageToggle.jsx";

const NavItems = ({ onNavigate }) => {
  const designNavLinks = useLocalizedDesignNav();

  return (
    <ul className="nav-ul max-lg:flex-col">
      {designNavLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <Link to={`/design${href}`} onClick={onNavigate} className="nav-li_a inline-flex min-h-11 items-center">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
NavItems.propTypes = { onNavigate: PropTypes.func };

const DesignNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuButton = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

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
      className={`design-navbar fixed top-0 left-0 right-0 z-50 bg-black/95 transition-transform duration-300 focus-within:translate-y-0 ${
        isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className="flex shrink-0 items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex min-h-11 items-center gap-2.5 text-neutral-400 font-bold text-xl hover:text-white transition-colors"
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
            <span className="text-pink-500 font-semibold text-sm">
              {t("designNavbarUI.designLabel")}
            </span>
          </div>

          <button
            ref={menuButton}
            type="button"
            onClick={toggleMenu}
            className="grid min-h-11 min-w-11 place-items-center rounded-sm text-neutral-400 hover:text-white lg:hidden"
            aria-label={t(isOpen ? "designNavbarUI.closeMenu" : "designNavbarUI.openMenu")}
            aria-expanded={isOpen}
            aria-controls="design-mobile-menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="w-6 h-6"
            />
          </button>

          <nav className="lg:flex hidden items-center gap-6">
            <NavItems />
            <button
              onClick={() => navigate("/dev")}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              {t("designNavbarUI.devPortfolio")}
            </button>
            <LanguageToggle />
          </nav>
        </div>
      </div>

      {isOpen && <div id="design-mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100dvh-84px)] overflow-y-auto overscroll-contain bg-black-200 backdrop-blur-sm lg:hidden">
        <nav className="p-5">
          <NavItems onNavigate={() => setIsOpen(false)} />
          <div className="mt-4">
            <button
              onClick={() => { setIsOpen(false); navigate("/dev"); }}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              {t("designNavbarUI.devPortfolio")}
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <LanguageToggle className="[&_button]:min-h-11 [&_button]:min-w-11" />
          </div>
        </nav>
      </div>}
    </header>
  );
};

export default DesignNavbar;
