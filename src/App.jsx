import { lazy, Suspense, useLayoutEffect, useRef } from "react";
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RenderBoundary from "./components/RenderBoundary.jsx";
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const DevPortfolio = lazy(() => import("./pages/DevPortfolio.jsx"));
const DesignPortfolio = lazy(() => import("./pages/DesignPortfolio.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));

const NotFound = () => {
  const { i18n } = useTranslation();
  const english = i18n.resolvedLanguage === "en";
  return <main className="c-space mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 text-white">
    <h1 data-route-focus tabIndex={-1} className="text-4xl font-bold">{english ? "Page not found" : "Página no encontrada"}</h1>
    <Link className="portfolio-link" to="/design">{english ? "Explore the design portfolio" : "Ver el portfolio de diseño"}</Link>
    <Link className="portfolio-link" to="/dev">{english ? "Explore development projects" : "Ver proyectos de desarrollo"}</Link>
  </main>;
};

const RouteRecovery = () => {
  const { i18n } = useTranslation();
  const english = i18n.resolvedLanguage === "en";
  return <main className="c-space mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 text-white" role="alert">
    <h1 className="text-3xl font-bold">{english ? "This page could not load" : "No se ha podido cargar esta página"}</h1>
    <p>{english ? "Check your connection and reload to try again." : "Comprueba tu conexión y vuelve a cargar para intentarlo de nuevo."}</p>
    <button className="field-btn" type="button" onClick={() => window.location.reload()}>{english ? "Reload page" : "Volver a cargar"}</button>
    <a className="portfolio-link" href="/">{english ? "Go to the home page" : "Ir al inicio"}</a>
  </main>;
};

const RouteNavigation = () => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const previousPath = useRef(location.pathname);

  useLayoutEffect(() => {
    const heading = document.querySelector("h1")?.textContent;
    document.title = heading ? `${heading} | Alewences` : t("meta.title");
  }, [location.pathname, i18n.resolvedLanguage, t]);

  useLayoutEffect(() => {
    const pathChanged = previousPath.current !== location.pathname;
    previousPath.current = location.pathname;

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
        target.scrollIntoView({ behavior: "instant" });
        target.focus({ preventScroll: true });
      }
    } else if (pathChanged) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.querySelector("[data-route-focus]")?.focus({ preventScroll: true });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <RenderBoundary fallback={<RouteRecovery />}>
      <Suspense fallback={<div role="status" className="c-space flex min-h-screen items-center justify-center text-white">Alewences…</div>}>
      <RouteNavigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dev" element={<DevPortfolio />} />
        <Route path="/design" element={<DesignPortfolio />} />
        <Route path="/design/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      </RenderBoundary>
    </Router>
  );
};

export default App;
