import { Link, useParams } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { clientProjects } from "../constants/clientProjects.js";
import ClientProjectDetail from "./ClientProjectDetail.jsx";
import useLocalizedProjectDetails from "../hooks/useLocalizedProjectDetails.js";
import DesignNavbar from "../sections/design/DesignNavbar.jsx";
import Footer from "../sections/Footer.jsx";
import CursorTrail from "../components/CursorTrail";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

/* eslint-disable react/prop-types -- The legacy route passes its resolved slug. */
const LegacyProjectDetail = ({ slug }) => {
  const { t } = useTranslation();
  const project = useLocalizedProjectDetails(slug);
  const [selectedVideoId, setSelectedVideoId] = useState(
    project?.videos?.[0]?.id ?? null
  );
  const selectedVideo = project?.videos?.find((v) => v.id === selectedVideoId) ?? project?.videos?.[0] ?? null;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const openVideo = useRef(null);
  const closeVideo = useRef(null);
  const focusAfterClose = useRef(false);

  useLayoutEffect(() => {
    if (isVideoOpen) closeVideo.current?.focus({ preventScroll: true });
    else if (focusAfterClose.current) {
      focusAfterClose.current = false;
      openVideo.current?.focus({ preventScroll: true });
    }
  }, [isVideoOpen]);
  // Gallery navigation functions
  const galleryCategories = project?.imageGallery
    ? Object.keys(project.imageGallery)
    : [];
  const [activeGalleryCategory, setActiveGalleryCategory] = useState(
    galleryCategories.length > 0 ? galleryCategories[0] : ""
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentGalleryImages =
    project?.imageGallery?.[activeGalleryCategory] || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentGalleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentGalleryImages.length - 1 : prev - 1
    );
  };

  const handleCategoryChange = (category) => {
    setActiveGalleryCategory(category);
    setCurrentImageIndex(0); // Reset to first image when changing category
  };

  if (!project) {
    return (
      <>
        <CursorTrail />
        <main className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t("projectDetailUI.projectNotFound")}
            </h1>
            <Link to="/design#design-projects" className="portfolio-link">
              {t("projectDetailUI.backToPortfolio")}
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <CursorTrail />
      <main className="max-w-7xl mx-auto">
        <DesignNavbar />

        {/* Project Header */}
        <section className="c-space my-20">
          <Link to="/design#design-projects" className="portfolio-link mb-8">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t("projectDetailUI.backToProjects")}
          </Link>
          <Link to="/design#video-showcase" className="portfolio-link mb-8 ml-5">{t("clientWork.backToVideo")}</Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Info */}
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-semibold mb-4">
                {project.category}
              </div>

              <h1 tabIndex={-1} data-route-focus className="text-4xl sm:text-5xl font-bold text-white mb-6 font-generalsans">
                {project.title}
              </h1>

              <p className="text-white-600 text-lg mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-white-600 text-sm mb-2">
                    {t("projectDetailUI.client")}
                  </p>
                  <p className="text-white font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">
                    {t("projectDetailUI.year")}
                  </p>
                  <p className="text-white font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">
                    {t("projectDetailUI.duration")}
                  </p>
                  <p className="text-white font-semibold">{project.duration}</p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">
                    {t("projectDetailUI.videosLabel")}
                  </p>
                  <p className="text-white font-semibold">
                    {project.videos.length} {t("projectDetailUI.videosCount")}
                  </p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">
                    {t("projectDetailUI.gallery")}
                  </p>
                  <p className="text-white font-semibold">
                    {galleryCategories.length}{" "}
                    {t("projectDetailUI.categoriesCount")}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-black-300 text-white-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Cover Image */}
            <div className="relative rounded-xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/20">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Video Player Section */}
        <section className="c-space my-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-generalsans">
            {t("projectDetailUI.projectVideos")}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="relative bg-black-200 rounded-xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/20">
                <div className={`relative bg-black ${selectedVideo.videoUrl.includes("/shorts/") ? "aspect-[9/16] mx-auto max-w-72" : "aspect-video"}`}>
                  {isVideoOpen && !videoFailed ? (
                    selectedVideo.videoUrl.includes("youtube.com") || selectedVideo.videoUrl.includes("youtu.be") || selectedVideo.videoUrl.includes("vimeo.com") ? (
                      <ReactPlayer
                        key={selectedVideo.id}
                        url={selectedVideo.videoUrl}
                        width="100%"
                        height="100%"
                        controls
                        playsinline
                        stopOnUnmount
                        onError={() => setVideoFailed(true)}
                        className="absolute inset-0"
                      />
                    ) : (
                      <video key={selectedVideo.id} src={selectedVideo.videoUrl} controls playsInline preload="none" aria-label={selectedVideo.title} onError={() => setVideoFailed(true)} className="absolute inset-0 h-full w-full object-contain" />
                    )
                  ) : (
                    <>
                      <img src={selectedVideo.thumbnail || project.coverImage} alt="" className="absolute inset-0 h-full w-full object-contain" />
                      {!videoFailed && (
                        <button type="button" ref={openVideo} onClick={() => setIsVideoOpen(true)} className="portfolio-link absolute inset-0 m-auto h-fit rounded-full bg-black/90 px-4" aria-label={t("portfolioVideo.openNamed", { title: selectedVideo.title })}>
                          {t("portfolioVideo.open")}
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6 bg-black-200">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-white-600">{selectedVideo.description}</p>
                  {videoFailed && <p role="alert" className="mt-3 text-rose-200">{t("portfolioVideo.error")}</p>}
                  <div className="mt-3 flex flex-wrap gap-x-4">
                    {isVideoOpen && (
                      <button
                        type="button"
                        ref={closeVideo}
                        onClick={() => {
                          focusAfterClose.current = true;
                          setIsVideoOpen(false);
                          setVideoFailed(false);
                        }}
                        className="portfolio-link"
                      >
                        {t("portfolioVideo.close")}
                      </button>
                    )}
                    <a href={selectedVideo.videoUrl} className="portfolio-link">{t("clientWork.originalVideo")}</a>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-pink-400 font-semibold">
                      {selectedVideo.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">
                {t("projectDetailUI.allVideos")} ({project.videos.length})
              </h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                {project.videos.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    aria-pressed={selectedVideo.id === video.id}
                    onClick={() => {
                      if (selectedVideo.id !== video.id) {
                        setSelectedVideoId(video.id);
                        setIsVideoOpen(false);
                        setVideoFailed(false);
                      }
                    }}
                    className={`w-full text-left group transition-all duration-300 ${
                      selectedVideo.id === video.id
                        ? "ring-2 ring-pink-500"
                        : "hover:ring-2 hover:ring-pink-500/50"
                    }`}
                  >
                    <div className="relative bg-black-200 rounded-lg overflow-hidden">
                      {/* Thumbnail */}
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={video.thumbnail || project.coverImage}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        {/* Duration Badge */}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-white text-xs font-semibold">
                          {video.duration}
                        </div>
                        {/* Currently Playing Badge */}
                        {selectedVideo.id === video.id && (
                          <div className="absolute top-2 left-2 px-2 py-1 bg-pink-500 rounded text-white text-xs font-semibold">
                            {t("clientWork.selectedVideo")}
                          </div>
                        )}
                      </div>
                      {/* Video Info */}
                      <div className="p-3">
                        <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                          {video.title}
                        </h4>
                        <p className="text-white-600 text-xs line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        {project.imageGallery && galleryCategories.length > 0 && (
          <section className="c-space my-20">
            <h2 className="text-3xl font-bold text-white mb-8 font-generalsans">
              {t("projectDetailUI.projectGallery")}
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeGalleryCategory === category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeGalleryCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30"
                      : "bg-black-300 text-white-600 hover:bg-black-200 hover:text-white"
                  }`}
                >
                  {t("designGalleryGroups." + category)}
                  <span className="ml-2 text-xs opacity-75">
                    ({project.imageGallery[category].length})
                  </span>
                </button>
              ))}
            </div>

            {/* Gallery Carousel */}
            {currentGalleryImages.length > 0 && (
              <div className="relative max-w-6xl mx-auto">
                {/* Main Image Display */}
                <div className="relative rounded-xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/20 mb-6">
                  <div className="relative w-full bg-black-300 flex items-center justify-center min-h-[400px]">
                    <img
                      src={currentGalleryImages[currentImageIndex].image}
                      alt={currentGalleryImages[currentImageIndex].title}
                      className="w-full h-auto object-contain transition-all duration-300"
                    />

                    {/* Navigation Arrows */}
                    <button
                      type="button"
                      aria-label={t("clientWork.previousImage")}
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    >
                      <MdChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      type="button"
                      aria-label={t("clientWork.nextImage")}
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    >
                      <MdChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                      {currentImageIndex + 1} / {currentGalleryImages.length}
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="bg-black-200 rounded-xl p-6 border border-pink-500/20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentGalleryImages[currentImageIndex].title}
                  </h3>
                  <p className="text-white-600 text-lg">
                    {currentGalleryImages[currentImageIndex].description}
                  </p>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-4 mt-6 overflow-x-auto pb-2 custom-scrollbar">
                  {currentGalleryImages.map((image, index) => (
                    <button
                      key={image.id}
                      type="button"
                      aria-pressed={index === currentImageIndex}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "border-pink-500 shadow-lg shadow-pink-500/30"
                          : "border-transparent hover:border-pink-500/50"
                      }`}
                    >
                      <img
                        src={image.image}
                        alt={image.title}
                        loading="lazy"
                        className="w-20 h-20 object-cover"
                      />
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <Footer />
      </main>
    </>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = clientProjects.find(({ id, to }) => id === slug && to);
  return project ? <ClientProjectDetail key={slug} project={project} /> : <LegacyProjectDetail key={slug} slug={slug} />;
};

export default ProjectDetail;
