import { useLayoutEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import DevPortfolio from "./pages/DevPortfolio.jsx";
import DesignPortfolio from "./pages/DesignPortfolio.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

const RouteNavigation = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

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
      <RouteNavigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dev" element={<DevPortfolio />} />
        <Route path="/design" element={<DesignPortfolio />} />
        <Route path="/design/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
