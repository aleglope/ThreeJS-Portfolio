import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import { projectDetails } from "../constants/design.js";
import DesignNavbar from "../sections/design/DesignNavbar.jsx";
import Footer from "../sections/Footer.jsx";
import CursorTrail from "../components/CursorTrail";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[slug];
  const [selectedVideo, setSelectedVideo] = useState(
    project?.videos?.[0] || null
  );
  const [isPlaying, setIsPlaying] = useState(false);

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

        <Footer />
      </main>
    </>
  );
};

export default ProjectDetail;


