/* eslint-disable react/prop-types -- Parent passes the shared media coordinator callbacks. */
import { useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MdAutoAwesome,
  MdDesignServices,
  MdAnalytics,
  MdTextFields,
  MdColorLens,
  MdBrush,
  MdVideocam,
  MdMovieEdit,
  MdFolderSpecial,
} from "react-icons/md";
import PortfolioVideo from "../../components/PortfolioVideo.jsx";
import useLocalizedVideoShowcase from "../../hooks/useLocalizedVideoShowcase.js";
import useLocalizedVideoSkills from "../../hooks/useLocalizedVideoSkills.js";
import { earlierVideos, mediaLocale } from "../../constants/portfolioMedia.js";
import { servicesUrl } from "../../constants/services.js";

const iconMap = {
  MdAutoAwesome,
  MdDesignServices,
  MdAnalytics,
  MdTextFields,
  MdColorLens,
  MdBrush,
  MdVideocam,
  MdMovieEdit,
  MdFolderSpecial,
};

const projectLinks = {
  "la-parrilla-de-champi": { to: "/design/project/la-parrilla-de-champi" },
  bretema: { href: "/estilos#experiencia-3d" },
  nova: { href: "/#maquetas" },
  alewences: { href: "/automatizacion-ia" },
};

const VideoShowcase = ({ playerVersion = 0, onPlayerOpen, onPlayerClose }) => {
  const { t, i18n } = useTranslation();
  const videos = useLocalizedVideoShowcase();
  const skills = useLocalizedVideoSkills();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const linkedVideo = videos.find(({ id }) => id === searchParams.get("video"));
  const selectedVideo = linkedVideo ?? videos[0];
  const selectedVideoId = selectedVideo.id;
  const [expanded, setExpanded] = useState(Boolean(linkedVideo && !linkedVideo.featured));
  const titleRef = useRef(null);
  const selectionFocus = useRef(false);
  const previousSelection = useRef(selectedVideoId);

  const projectLink = projectLinks[selectedVideo.projectId];
  const displayedVideos = expanded ? videos : videos.filter(({ featured }) => featured);
  const locale = mediaLocale(i18n.resolvedLanguage);

  useLayoutEffect(() => {
    if (previousSelection.current === selectedVideoId) return;
    previousSelection.current = selectedVideoId;
    onPlayerClose?.();
    if (!selectedVideo.featured) setExpanded(true);
    if (selectionFocus.current) {
      selectionFocus.current = false;
      titleRef.current?.focus();
    }
  }, [selectedVideoId, selectedVideo.featured, onPlayerClose]);

  const choose = (id) => {
    if (id === selectedVideoId) {
      titleRef.current?.focus();
      return;
    }
    selectionFocus.current = true;
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("video", id);
    navigate({ pathname: "/design", search: `?${nextParams}`, hash: "#video-showcase" });
  };

  return (
    <section className="portfolio-anchor c-space my-20" id="video-showcase" tabIndex={-1} aria-labelledby="video-showcase-title">
      <div className="mb-9 max-w-2xl">
        <h2 id="video-showcase-title" className="head-text mb-3">{t("videoShowcaseUI.heading")}</h2>
        <p className="text-lg text-neutral-300">{t("videoShowcaseUI.subheading")}</p>
      </div>

      <div id="portfolio-theater" className="grid items-center gap-6 rounded-2xl border border-white/10 bg-black-200 p-3 sm:p-6 md:grid-cols-[2fr_1fr] md:gap-9">
        <div className="min-w-0 md:col-start-2 md:row-start-1">
          <p className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-neutral-300">
            <span className="font-semibold text-pink-300">{selectedVideo.status}</span>
            <span>{selectedVideo.duration}</span>
          </p>
          <h3 ref={titleRef} tabIndex={-1} className="portfolio-anchor text-balance text-2xl font-semibold text-white sm:text-3xl">
            {selectedVideo.title}
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-300">{selectedVideo.description}</p>
          <p className="mt-3 text-sm text-neutral-400">{t("portfolioVideo.originalAudio")}</p>
          {projectLink.to ? (
            <Link to={projectLink.to} className="portfolio-link mt-2">{t("portfolioVideo.project")}</Link>
          ) : (
            <a href={servicesUrl(selectedVideo.servicesPath ?? projectLink.href)} className="portfolio-link mt-2">{t("portfolioVideo.related")}</a>
          )}
        </div>
        <div className="min-w-0 md:col-start-1 md:row-start-1">
          <PortfolioVideo key={`${playerVersion}:${selectedVideoId}`} video={selectedVideo} onOpen={onPlayerOpen} onClose={onPlayerClose} />
        </div>
      </div>

      <div className="mb-4 mt-10 flex flex-wrap items-center justify-between gap-x-6">
        <h3 className="text-xl font-semibold text-white">
          {t(expanded ? "videoShowcaseUI.collection" : "videoShowcaseUI.featured")}
        </h3>
        <button
          type="button"
          onClick={() => setExpanded((previous) => !previous)}
          aria-expanded={expanded}
          aria-controls="portfolio-video-list"
          className="portfolio-link"
        >
          {expanded ? t("videoShowcaseUI.showFeatured") : t("videoShowcaseUI.showAll", { count: videos.length })}
        </button>
      </div>
      <ul id="portfolio-video-list" className="grid grid-cols-1 gap-3 min-[370px]:grid-cols-2 md:grid-cols-3">
        {displayedVideos.map((video) => (
          <li key={video.id} className="min-w-0">
            <button
              type="button"
              onClick={() => choose(video.id)}
              aria-pressed={video.id === selectedVideoId}
              aria-controls="portfolio-theater"
              className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black-200 text-left hover:border-pink-300/70 aria-pressed:border-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
            >
              <div className="relative aspect-video w-full bg-black">
                <img
                  src={video.poster}
                  width={video.width}
                  height={video.height}
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="h-full w-full object-contain"
                />
                <span className="absolute bottom-2 right-2 rounded bg-black/90 px-2 py-0.5 text-xs font-medium text-white">
                  {video.duration}
                </span>
              </div>
              <span className="px-3 pb-4 pt-3 font-semibold text-white group-hover:text-pink-200">{video.title}</span>
            </button>
          </li>
        ))}
      </ul>

      {expanded && (
        <div className="mt-8 border-t border-white/10 pt-5">
          <h3 className="text-lg font-semibold text-white">{t("videoShowcaseUI.archive")}</h3>
          <ul className="mt-2 grid gap-x-6 sm:grid-cols-2">
            {earlierVideos.map((video) => (
              <li key={video.id}>
                <a href={video.href} className="portfolio-link">{video.title[locale]} · YouTube</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white text-center mb-8 font-generalsans">
          {t("videoShowcaseUI.skillsHeading")}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-black-200 border border-black-300 rounded-xl p-6 text-center hover:border-pink-500 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                {skill.iconComponent && iconMap[skill.iconComponent] ? (
                  (() => {
                    const IconComponent = iconMap[skill.iconComponent];
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()
                ) : (
                  <MdMovieEdit className="w-8 h-8 text-white" />
                )}
              </div>
              <h4 className="text-white font-semibold mb-2">{skill.title}</h4>
              <p className="text-white-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
