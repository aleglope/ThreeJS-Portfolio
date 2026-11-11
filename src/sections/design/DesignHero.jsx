import { lazy, Suspense, useRef } from "react";
import PropTypes from "prop-types";
import RenderBoundary from "../../components/RenderBoundary.jsx";
import useVisibleMotion from "../../hooks/useVisibleMotion.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import SketchfabModel from "../../components/SketchfabModel.jsx";

const reaperScene = "31eb7468dce246538fc15edf25f97ef8";

const DesignDecoration = lazy(() => import("./DesignDecoration.jsx"));

const DesignHero = ({ activeMedia, onSceneToggle }) => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const motionVisible = useVisibleMotion(heroRef);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const reducedMotion = useMediaQuery({ query: "(prefers-reduced-motion: reduce)" });
  const sceneOpen = activeMedia === "scene";

  return (
    <section ref={heroRef} className="portfolio-anchor relative flex min-h-screen w-full flex-col" id="home" tabIndex={-1} aria-labelledby="design-hero-title">
      <div className="c-space relative z-10 mx-auto mt-24 w-full sm:mt-36">
        <p className="text-center text-2xl font-medium text-white sm:text-3xl">
          {t("hero.greeting")} <span className="portfolio-motion waving-hand" aria-hidden="true">👋</span>
        </p>
        <h1 id="design-hero-title" data-route-focus tabIndex={-1} className="hero_tag bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          {t("designHero.tagline")}
        </h1>
      </div>

      {!activeMedia && !reducedMotion && !isMobile && motionVisible && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <RenderBoundary><Suspense fallback={null}><DesignDecoration /></Suspense></RenderBoundary>
        </div>
      )}

      <div className="c-space relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-5 pb-5 pt-8">
        {!sceneOpen && <Link to="/design?video=champi-rotulos#video-showcase" className="group block overflow-hidden rounded-2xl border border-white/15 bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300">
          <img src="/media/portfolio/posters/champi-rotulos.webp" alt="" width="960" height="720" fetchPriority="high" className="aspect-video w-full object-cover object-top" />
          <span className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-sm text-white">
            <span>{t("designHero.featuredWork")}</span><span className="text-pink-200 underline underline-offset-4">{t("designHero.featuredCta")} →</span>
          </span>
        </Link>}
        <div id="model-3d-showcase" tabIndex={-1} className="portfolio-anchor flex w-full flex-col items-center gap-3">
          <button
            type="button"
            onClick={onSceneToggle}
            aria-expanded={sceneOpen}
            aria-controls="design-scene-region"
            className="min-h-11 rounded-full border border-white/20 bg-black/90 px-5 py-2 font-semibold text-white hover:border-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
          >
            {t(sceneOpen ? "designHero.closeScene" : "designHero.openScene")}
          </button>
          <div id="design-scene-region" hidden={!sceneOpen} className="w-full">
            {sceneOpen && <SketchfabModel modelId={reaperScene} title="Reaper Scene" />}
          </div>
          <a href={`https://sketchfab.com/models/${reaperScene}`} className="portfolio-link text-sm">{t("designHero.sceneSource")}</a>
        </div>
      </div>

      <div className="c-space relative z-10 mx-auto w-full pb-7 text-center">
        <Link to="/design#design-projects" className="btn w-fit min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300">
          <span className="relative flex h-3 w-3" aria-hidden="true">
            <span className="portfolio-motion btn-ping" />
            <span className="btn-ping_dot" />
          </span>
          {t("designHero.viewWork")}
        </Link>
      </div>
    </section>
  );
};

DesignHero.propTypes = { activeMedia: PropTypes.string, onSceneToggle: PropTypes.func.isRequired };
export default DesignHero;
