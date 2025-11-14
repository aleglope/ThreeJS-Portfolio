import { useState } from "react";
import ReactPlayer from "react-player";
import { videoShowcase, videoSkills } from "../../constants/design.js";

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsPlaying(true); // Auto-play cuando se selecciona
  };

  const handleClose = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <section className="c-space my-20 relative" id="video-showcase">
      <div className="text-center mb-12">
        <p className="head-text mb-4">Video Showcase</p>
        <p className="text-white-600 text-lg max-w-2xl mx-auto">
          Professional video editing and motion graphics projects
        </p>
      </div>

      {/* Featured Video Player */}
      <div className="mb-16 max-w-5xl mx-auto">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {selectedVideo ? (
            <div className="absolute inset-0 bg-black rounded-2xl border border-black-200 shadow-2xl">
              {/* Video Player Container */}
              <div className="absolute inset-0 bg-black">
                {selectedVideo.videoUrl.includes("youtube.com") ||
                selectedVideo.videoUrl.includes("youtu.be") ||
                selectedVideo.videoUrl.includes("vimeo.com") ? (
                  <ReactPlayer
                    src={selectedVideo.videoUrl}
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
                    autoPlay
                    className="w-full h-full object-contain"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    preload="auto"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Info Overlay */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pointer-events-none">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-white-600">{selectedVideo.description}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="absolute inset-0 bg-black-300 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-20 h-20 mx-auto mb-4 text-white-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-white-600 text-lg mb-2">
                  Select a video below to play
                </p>
                <p className="text-white-600/60 text-sm">
                  Click on any video thumbnail to start watching
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoShowcase.map((video) => (
          <div
            key={video.id}
            onClick={() => handleVideoSelect(video)}
            className="group relative bg-black-200 border border-black-300 rounded-xl overflow-hidden cursor-pointer hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white ml-1"
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
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h4 className="text-white font-semibold mb-1 group-hover:text-pink-400 transition-colors">
                {video.title}
              </h4>
              <p className="text-white-600 text-sm line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white text-center mb-8 font-generalsans">
          Image and Video Production Skills
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {videoSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-black-200 border border-black-300 rounded-xl p-6 text-center hover:border-pink-500 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {skill.icon === "video" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  )}
                  {skill.icon === "motion" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  )}
                  {skill.icon === "sound" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  )}
                </svg>
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
