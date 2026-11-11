/* eslint-disable react/prop-types -- The project object comes from the shared client registry. */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";
import PortfolioVideo from "../components/PortfolioVideo.jsx";
import DesignNavbar from "../sections/design/DesignNavbar.jsx";
import Footer from "../sections/Footer.jsx";
import useLocalizedVideoShowcase from "../hooks/useLocalizedVideoShowcase.js";
import { servicesUrl } from "../constants/services.js";

const CaseImage = ({ image, alt, contain = false }) => (
  <img
    src={image.src}
    width={image.width}
    height={image.height}
    alt={alt}
    loading="lazy"
    decoding="async"
    className={contain
      ? "h-auto w-full rounded-xl bg-black-200 p-4"
      : "h-auto w-full rounded-xl border border-white/10"}
  />
);

const CaseVideos = ({ videoIds }) => {
  const { t } = useTranslation();
  const videos = useLocalizedVideoShowcase();
  const [videoId, setVideoId] = useState(videoIds[0]);
  const video = videos.find(({ id }) => id === videoId);

  return (
    <section id="videos" tabIndex={-1} className="portfolio-anchor mb-16 border-t border-white/10 pt-10" aria-labelledby="case-videos-title">
      <h2 id="case-videos-title" className="head-text mb-5">{t("clientWork.pieces")}</h2>
      <ul className="mb-5 grid gap-2 sm:grid-cols-2">
        {videoIds.map((id) => {
          const option = videos.find((item) => item.id === id);
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => setVideoId(id)}
                aria-pressed={id === videoId}
                aria-controls="case-video"
                className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-black-200 px-3 py-2 text-left text-sm font-semibold text-neutral-200 hover:border-pink-300 aria-pressed:border-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-300"
              >
                {option.title}
                <span className="shrink-0 text-xs text-neutral-400">{option.duration}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div id="case-video" className="grid items-center gap-5 rounded-2xl border border-white/10 bg-black-200 p-3 sm:p-6 md:grid-cols-[1fr_2fr]">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-white">{video.title}</h3>
          <p className="mt-2 leading-relaxed text-neutral-300">{video.description}</p>
          <p className="mt-3 text-sm text-neutral-400">{t("portfolioVideo.originalAudio")}</p>
        </div>
        <PortfolioVideo key={video.id} video={video} />
      </div>
    </section>
  );
};

const ClientProjectDetail = ({ project }) => {
  const { t } = useTranslation();
  const key = `clientWork.cases.${project.id}`;

  return (
    <main className="mx-auto max-w-7xl">
      <DesignNavbar />
      <article className="c-space pb-10 pt-24 sm:pt-28">
        <div className="mb-8 flex flex-wrap gap-x-6">
          <Link to="/design#design-projects" className="portfolio-link">
            <MdArrowBack aria-hidden="true" className="shrink-0" /> {t("projectDetailUI.backToProjects")}
          </Link>
          <Link to="/design#video-showcase" className="portfolio-link">{t("clientWork.backToVideo")}</Link>
        </div>

        <header className="mb-14 grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold text-pink-300">{t("clientWork.real")}</p>
            <h1 data-route-focus tabIndex={-1} className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t(`${key}.title`)}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-200">{t(`${key}.intro`)}</p>
            <p className="mt-3 leading-relaxed text-neutral-400">{t(`${key}.role`)}</p>
            <div className="mt-4 flex flex-wrap gap-x-5">
              {project.href && (
                <a href={project.href} className="portfolio-link">
                  {t(`${key}.visit`)} <MdArrowOutward aria-hidden="true" />
                </a>
              )}
              <a href={servicesUrl(project.servicesPath)} className="portfolio-link">
                {t("clientWork.commercialCase")} <MdArrowOutward aria-hidden="true" />
              </a>
            </div>
          </div>
          <img
            src={project.cover.src}
            width={project.cover.width}
            height={project.cover.height}
            alt={t(`${key}.coverAlt`)}
            className="h-auto w-full rounded-2xl border border-white/10"
          />
        </header>

        <section aria-labelledby="case-work-title" className="mb-16 border-t border-white/10 pt-10">
          <h2 id="case-work-title" className="head-text mb-6">{t(`${key}.workHeading`)}</h2>
          <div className="grid items-start gap-5 md:grid-cols-2">
            {project.chapters.map((chapter) => {
              const chapterKey = `${key}.chapters.${chapter.id}`;
              const href = chapter.href || (chapter.servicesPath ? servicesUrl(chapter.servicesPath) : null);
              return (
                <section key={chapter.id} id={chapter.id} tabIndex={-1} className="portfolio-anchor min-w-0 rounded-2xl border border-white/10 bg-black-200 p-4 sm:p-5">
                  <div className="mb-3">
                    <p className="mb-2 text-sm font-semibold text-pink-300">{t(`${chapterKey}.status`)}</p>
                    <h3 className="text-xl font-semibold text-white">{t(`${chapterKey}.title`)}</h3>
                    <p className="mt-2 leading-relaxed text-neutral-300">{t(`${chapterKey}.description`)}</p>
                  </div>
                  {chapter.image && <CaseImage image={chapter.image} alt={t(`${chapterKey}.alt`)} contain={chapter.contain} />}
                  {href && (
                    <a href={href} className="portfolio-link mt-2">
                      {t(`${chapterKey}.link`)} <MdArrowOutward aria-hidden="true" />
                    </a>
                  )}
                  {chapter.id === "diploma" && (
                    <ol className="ml-5 list-decimal space-y-2 text-sm text-neutral-200">
                      {[1, 2, 3].map((step) => <li key={step}>{t(`${chapterKey}.step${step}`)}</li>)}
                    </ol>
                  )}
                </section>
              );
            })}
          </div>
        </section>

        {project.videoIds.length > 0 && <CaseVideos videoIds={project.videoIds} />}

        <Link to="/design#design-projects" className="portfolio-link">
          <MdArrowBack aria-hidden="true" className="shrink-0" /> {t("projectDetailUI.backToProjects")}
        </Link>
      </article>
      <Footer />
    </main>
  );
};

export default ClientProjectDetail;
