import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { createPongSession } from "../utils/pongRuntime.js";

function Pong() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const startButton = useRef(null);
  const errorMessage = useRef(null);
  const session = useRef(null);
  const restoreFocus = useRef(false);
  const [phase, setPhase] = useState("idle");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const gameStarted = phase === "playing";

  const stopSession = useCallback(() => {
    session.current?.stop();
    session.current = null;
  }, []);

  useEffect(() => {
    if (isMobile) setPhase("idle");
    return stopSession;
  }, [isMobile, stopSession]);

  useEffect(() => {
    if (phase === "playing") canvasRef.current?.focus({ preventScroll: true });
    if (phase === "error") errorMessage.current?.focus({ preventScroll: true });
    if (phase === "idle" && restoreFocus.current) {
      restoreFocus.current = false;
      startButton.current?.focus({ preventScroll: true });
    }
  }, [phase]);

  const handleStartGame = () => {
    if (isMobile || session.current || !canvasRef.current) return;
    setPhase("loading");
    session.current = createPongSession({
      isActive: () => !document.hidden && document.activeElement === canvasRef.current,
      onReady: () => setPhase("playing"),
      onError: () => {
        session.current = null;
        setPhase("error");
      },
    });
  };

  const handleStopGame = () => {
    stopSession();
    restoreFocus.current = true;
    setPhase("idle");
  };

  // Si es un dispositivo móvil, mostrar mensaje alternativo
  if (isMobile) {
    return (
      <section className="c-space my-20" id="pong">
        <div className="relative min-h-[300px] flex items-center justify-center flex-col text-center px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-gradient">
              {t("pong.arcadeTitle")}
            </span>
          </h2>
          <div className="text-gray-400 max-w-md">
            <p className="mb-4">{t("pong.mobileWarning1")}</p>
            <p>{t("pong.mobileWarning2")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="c-space my-20" id="pong">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-5xl font-extrabold mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-gradient">
            {t("pong.arcadeTitle")}
          </span>
          <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full animate-pulse"></div>
        </h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          {t("pong.instructions")}
        </p>

        <div className="relative w-full max-w-[808px]">
          <canvas
            id="pongCanvas"
            ref={canvasRef}
            width={800}
            height={600}
            className="block h-auto w-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-lg
                     shadow-lg shadow-purple-500/20 p-[2px]"
            tabIndex={0}
            aria-label={t("pong.arcadeTitle")}
          />

          {!gameStarted && (
            <div className="absolute inset-0 overflow-y-auto bg-black bg-opacity-80 rounded-lg flex flex-col items-center justify-center p-8">
              <div className="text-gray-300 text-center space-y-4 max-w-2xl mb-8">
                <p>{t("pong.description1")}</p>
                <p>{t("pong.description2")}</p>
                <ul className="space-y-2">
                  {t("pong.features", { returnObjects: true }).map((f, i) => (
                    <li key={i}>
                      • <strong>{f.term}</strong> - {f.detail}
                    </li>
                  ))}
                </ul>
                <p className="text-purple-400 mt-4">{t("pong.description3")}</p>
              </div>
              {phase === "error" && (
                <p ref={errorMessage} tabIndex={-1} role="alert" className="mb-4 text-center text-rose-200">{t("pong.loadError")}</p>
              )}
              {phase === "loading" && <p role="status" className="mb-4 text-center text-neutral-200">{t("pong.loading")}</p>}
              <button
                type="button"
                ref={startButton}
                disabled={phase === "loading"}
                onClick={handleStartGame}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 
                         text-white font-bold rounded-lg shadow-lg 
                         hover:from-purple-600 hover:to-blue-600 
                         transform hover:scale-105 transition-all
                         animate-pulse disabled:animate-none disabled:opacity-60"
              >
                {t(phase === "error" ? "pong.retry" : phase === "loading" ? "pong.loading" : "pong.startButton")}
              </button>
            </div>
          )}
        </div>
        {(phase === "playing" || phase === "loading") && (
          <button type="button" onClick={handleStopGame} className="portfolio-link mt-4">{t("pong.stop")}</button>
        )}
      </div>
    </section>
  );
}

export default Pong;
