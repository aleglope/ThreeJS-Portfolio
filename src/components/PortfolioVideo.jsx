/* eslint-disable react/prop-types -- The video object is the localized portfolio registry entry. */
import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const VideoFrame = ({ video, onError }) => {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const element = videoRef.current;
    element.focus({ preventScroll: true });

    return () => {
      element.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={video.src}
      poster={video.poster}
      controls
      preload="none"
      playsInline
      tabIndex={0}
      aria-label={video.title}
      className="block h-full w-full object-contain"
      onError={onError}
    >
      {video.captions && (
        <track default kind="captions" src={video.captions} srcLang="es" label="Español" />
      )}
    </video>
  );
};

const PortfolioVideo = ({ video, onClose, onOpen }) => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState("poster");
  const openButton = useRef(null);
  const errorMessage = useRef(null);
  const restoreFocus = useRef(false);

  useLayoutEffect(() => {
    if (phase === "error") errorMessage.current?.focus({ preventScroll: true });
    if (phase === "poster" && restoreFocus.current) {
      restoreFocus.current = false;
      openButton.current?.focus({ preventScroll: true });
    }
  }, [phase]);

  const close = () => {
    restoreFocus.current = true;
    setPhase("poster");
    onClose?.();
  };

  return (
    <div>
      <div
        className="relative mx-auto overflow-hidden rounded-xl border border-white/10 bg-black"
        style={{
          aspectRatio: `${video.width} / ${video.height}`,
          width: `min(100%, ${Math.round(540 * video.width / video.height)}px)`,
        }}
      >
        {phase === "player" ? (
          <VideoFrame video={video} onError={() => {
            setPhase("error");
            onClose?.();
          }} />
        ) : (
          <>
            <img
              src={video.poster}
              width={video.width}
              height={video.height}
              alt=""
              className="h-full w-full object-contain"
            />
            <button
              type="button"
              ref={openButton}
              onClick={() => {
                onOpen?.();
                setPhase("player");
              }}
              className="absolute inset-0 m-auto flex h-fit min-h-11 w-max max-w-[calc(100%-1rem)] items-center justify-center gap-2 rounded-full border border-white/30 bg-black/90 px-4 py-2.5 text-sm font-semibold text-white hover:border-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
              aria-label={t(phase === "error" ? "portfolioVideo.retryNamed" : "portfolioVideo.openNamed", { title: video.title })}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
                <path d="M8 5v14l11-7z" />
              </svg>
              {phase === "error" ? t("portfolioVideo.retry") : t("portfolioVideo.open")}
            </button>
          </>
        )}
      </div>
      {phase === "player" && (
        <div className="mt-3 flex justify-center">
          <button type="button" onClick={close} className="portfolio-link">
            {t("portfolioVideo.close")}
          </button>
        </div>
      )}
      {phase === "error" && (
        <p ref={errorMessage} tabIndex={-1} role="alert" className="mt-3 text-center text-rose-200">
          {t("portfolioVideo.error")}
        </p>
      )}
      {video.transcript && (
        <details className="mt-4 rounded-lg border border-white/10 px-4 py-2 text-neutral-200">
          <summary className="min-h-11 cursor-pointer py-2 font-medium text-pink-200">{t("portfolioVideo.transcript")}</summary>
          <p lang={video.transcript.lang} className="mb-3 whitespace-pre-line leading-relaxed">{video.transcript.text}</p>
        </details>
      )}
    </div>
  );
};

export default PortfolioVideo;
