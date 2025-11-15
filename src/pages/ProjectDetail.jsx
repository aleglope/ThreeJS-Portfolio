import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import { projectDetails } from "../constants/design.js";
import DesignNavbar from "../sections/design/DesignNavbar.jsx";
import Footer from "../sections/Footer.jsx";
import CursorTrail from "../components/CursorTrail";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[slug];
  const [selectedVideo, setSelectedVideo] = useState(
    project?.videos?.[0] || null
  );
  const [isPlaying, setIsPlaying] = useState(false);
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
              Project Not Found
            </h1>
            <button
              onClick={() => navigate("/design")}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Back to Portfolio
            </button>
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
          <button
            onClick={() => navigate("/design")}
            className="flex items-center gap-2 text-white-600 hover:text-pink-400 transition-colors duration-300 mb-8"
          >
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
            Back to Projects
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Info */}
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-semibold mb-4">
                {project.category}
              </div>

              <h1 className="text-5xl font-bold text-white mb-6 font-generalsans">
                {project.title}
              </h1>

              <p className="text-white-600 text-lg mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-white-600 text-sm mb-2">Client</p>
                  <p className="text-white font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">Year</p>
                  <p className="text-white font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">Duration</p>
                  <p className="text-white font-semibold">{project.duration}</p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">Videos</p>
                  <p className="text-white font-semibold">
                    {project.videos.length} videos
                  </p>
                </div>
                <div>
                  <p className="text-white-600 text-sm mb-2">Gallery</p>
                  <p className="text-white font-semibold">
                    {galleryCategories.length} categories
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
            Project Videos
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="relative bg-black-200 rounded-xl overflow-hidden border border-pink-500/30 shadow-2xl shadow-pink-500/20">
                {/* Video Player */}
                <div
                  className="relative bg-black"
                  style={{ paddingTop: "56.25%" }}
                >
                  <div className="absolute inset-0">
                    {selectedVideo.videoUrl.includes("youtube.com") ||
                    selectedVideo.videoUrl.includes("youtu.be") ||
                    selectedVideo.videoUrl.includes("vimeo.com") ? (
                      <ReactPlayer
                        url={selectedVideo.videoUrl}
                        width="100%"
                        height="100%"
                        controls={true}
                        playing={isPlaying}
                        volume={0.8}
                        muted={false}
                        loop={false}
                        playsinline={true}
                        pip={false}
                        stopOnUnmount={true}
                        light={false}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        config={{
                          youtube: {
                            playerVars: {
                              autoplay: 1,
                              controls: 1,
                              modestbranding: 1,
                              rel: 0,
                              showinfo: 0,
                              fs: 1,
                              playsinline: 1,
                            },
                          },
                        }}
                      />
                    ) : (
                      <video
                        src={selectedVideo.videoUrl}
                        controls
                        className="w-full h-full object-contain"
                        playsInline
                      />
                    )}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 bg-black-200">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-white-600">{selectedVideo.description}</p>
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
                All Videos ({project.videos.length})
              </h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                {project.videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => {
                      setSelectedVideo(video);
                      setIsPlaying(false);
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
                          src={video.thumbnail}
                          alt={video.title}
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
                            Now Playing
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
              Project Gallery
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeGalleryCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30"
                      : "bg-black-300 text-white-600 hover:bg-black-200 hover:text-white"
                  }`}
                >
                  {category}
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
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    >
                      <MdChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
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

export default ProjectDetail;
