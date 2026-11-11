/* eslint-disable react/prop-types -- NavItems receives the menu's local close callback. */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useLocalizedDesignNav from "../../hooks/useLocalizedDesignNav.js";
import LanguageToggle from "../../components/LanguageToggle.jsx";

const NavItems = ({ onNavigate }) => {
  const designNavLinks = useLocalizedDesignNav();

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1 max-[879px]:flex-col">
      {designNavLinks.map(({ id, href, name }) => (
        <li key={id}>
          <Link to={`/design${href}`} onClick={onNavigate} className="inline-flex min-h-11 items-center rounded-sm text-neutral-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const DesignNavbar = () => {
  const [openAtLocation, setOpenAtLocation] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuButton = useRef(null);
  const location = useLocation();
  const { t } = useTranslation();
  const isOpen = openAtLocation === location.key;
  const closeMenu = () => setOpenAtLocation(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10 || currentScrollY < lastScrollY.current) setIsVisible(true);
      else if (currentScrollY > 100 && currentScrollY > lastScrollY.current) setIsVisible(false);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onEscape = (event) => {
    if (event.key === "Escape" && isOpen) {
      closeMenu();
      menuButton.current?.focus();
    }
  };

  return (
    <header
      onKeyDown={onEscape}
      className={`portfolio-motion fixed inset-x-0 top-0 z-50 bg-[#09090c]/95 transition-transform duration-300 focus-within:translate-y-0 ${isVisible || isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="c-space mx-auto flex max-w-7xl items-center justify-between gap-3 py-3">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Link to="/" className="flex min-h-11 items-center gap-2 rounded-sm text-xl font-bold text-neutral-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300">
            <img src="/assets/agl-icono-sobre-oscuro.svg" alt="" width="27" height="28" className="h-7 w-auto" />
            AGonzL
          </Link>
          <span aria-hidden="true" className="text-neutral-600">|</span>
          <span className="text-sm font-semibold text-pink-300">{t("designNavbarUI.designLabel")}</span>
        </div>

        <button
          type="button"
          ref={menuButton}
          onClick={() => setOpenAtLocation(isOpen ? null : location.key)}
          className="grid min-h-11 min-w-11 place-items-center rounded-sm text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300 min-[880px]:hidden"
          aria-label={t(isOpen ? "designNavbarUI.closeMenu" : "designNavbarUI.openMenu")}
          aria-expanded={isOpen}
          aria-controls="design-mobile-menu"
        >
          <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="" className="h-6 w-6" />
        </button>

        <nav aria-label={t("designNavbarUI.navigation")} className="hidden items-center gap-4 min-[880px]:flex">
          <NavItems />
          <Link to="/dev" className="portfolio-link whitespace-nowrap text-blue-300 hover:text-blue-200">{t("designNavbarUI.devPortfolio")}</Link>
          <LanguageToggle />
        </nav>
      </div>

      <div id="design-mobile-menu" hidden={!isOpen} className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#09090c] min-[880px]:hidden">
        {isOpen && (
          <nav aria-label={t("designNavbarUI.navigation")} className="c-space pb-4">
            <NavItems onNavigate={closeMenu} />
            <Link to="/dev" onClick={closeMenu} className="portfolio-link text-blue-300 hover:text-blue-200">{t("designNavbarUI.devPortfolio")}</Link>
            <div className="mt-2"><LanguageToggle /></div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default DesignNavbar;
