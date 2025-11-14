import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { designProjects, designCategories } from "../../constants/design.js";

const DesignProjects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? designProjects
      : designProjects.filter((project) => project.category === filter);

  return (
    <section className="c-space my-20" id="design-projects">
      <div className="text-center mb-12">
        <p className="head-text mb-4">Design & Video Portfolio</p>
        <p className="text-white-600 text-lg max-w-2xl mx-auto">
          A collection of my creative work in graphic design and video
          production
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {designCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === category
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30"
                : "bg-black-300 text-white-600 hover:bg-black-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-black-200 border border-black-300 rounded-xl overflow-hidden hover:border-pink-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image/Video */}
            <div className="relative h-64 overflow-hidden bg-black-300">
              <img
                src={project.image || project.videoUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                {project.category}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 font-generalsans">
                {project.title}
              </h3>

              <p className="text-white-600 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <button
                onClick={() => {
                  if (project.hasDetailPage && project.slug) {
                    navigate(`/design/project/${project.slug}`);
                  }
                }}
                className={`flex items-center gap-2 text-pink-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 ${
                  !project.hasDetailPage && "opacity-50 cursor-not-allowed"
                }`}
                disabled={!project.hasDetailPage}
              >
                {project.hasDetailPage ? "View Project" : "Coming Soon"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-white-600 mb-4">Want to see more of my work?</p>
        <a
          href="#design-contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105"
        >
          Get in Touch
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
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default DesignProjects;
