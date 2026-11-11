/* eslint-disable react/prop-types -- The parent coordinates the scene and video player. */
import { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Float } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import CanvasLoader from "../../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import Cube from "../../components/Cube.jsx";
import Rings from "../../components/Rings.jsx";
import SketchfabModel from "../../components/SketchfabModel.jsx";

const reaperScene = "31eb7468dce246538fc15edf25f97ef8";

class DecorationBoundary extends Component {
  state = { unavailable: false };

  static getDerivedStateFromError() {
    return { unavailable: true };
  }

  render() {
    return this.state.unavailable ? null : this.props.children;
  }
}

const DesignHero = ({ activeMedia, onSceneToggle }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const reducedMotion = useMediaQuery({ query: "(prefers-reduced-motion: reduce)" });
  const sceneOpen = activeMedia === "scene";

  return (
    <section className="portfolio-anchor relative flex min-h-screen w-full flex-col" id="home" tabIndex={-1} aria-labelledby="design-hero-title">
      <div className="c-space relative z-10 mx-auto mt-24 w-full sm:mt-36">
        <p className="text-center text-2xl font-medium text-white sm:text-3xl">
          {t("hero.greeting")} <span className="portfolio-motion waving-hand" aria-hidden="true">👋</span>
        </p>
        <h1 id="design-hero-title" data-route-focus tabIndex={-1} className="hero_tag bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          {t("designHero.tagline")}
        </h1>
      </div>

      {!activeMedia && !reducedMotion && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <DecorationBoundary>
            <Canvas className="h-full w-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <group>
                  <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2}>
                    <Cube position={isMobile ? [5, -3, 0] : [9, -4, 0]} scale={isMobile ? 0.8 : 1} />
                  </Float>
                  <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
                    <Cube position={isMobile ? [-5, 3, 0] : [-9, 4, 0]} scale={isMobile ? 0.8 : 1} />
                  </Float>
                  <Rings position={isMobile ? [0, 0, -5] : [-15, 8, -5]} />
                </group>
                <ambientLight intensity={1.2} />
                <directionalLight position={[10, 10, 10]} intensity={0.7} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
                <pointLight position={[10, 10, 5]} intensity={0.5} color="#00ffff" />
              </Suspense>
            </Canvas>
          </DecorationBoundary>
        </div>
      )}

      <div className="c-space relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col justify-end pb-5 pt-8">
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

export default DesignHero;
