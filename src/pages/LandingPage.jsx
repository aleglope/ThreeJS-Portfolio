import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera, Float } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import CanvasLoader from "../components/CanvasLoader";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import CursorTrail from "../components/CursorTrail";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <CursorTrail />
      <div className="min-h-screen w-full bg-black relative overflow-hidden">
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Cube position={[-8, 2, 0]} />
              </Float>
              
              <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
                <Cube position={[8, -2, 0]} />
              </Float>
              
              <Rings position={[0, 0, -5]} />
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center c-space">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-generalsans">
              Alejandro González
            </h1>
            <p className="text-2xl md:text-3xl text-gray_gradient font-generalsans">
              Choose Your Experience
            </p>
          </div>

          {/* Portfolio Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
            {/* Development Portfolio Card */}
            <div
              onClick={() => navigate("/dev")}
              className="group relative bg-black-200 border border-black-300 rounded-2xl p-8 hover:border-blue-500 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-4 font-generalsans">
                  Development
                </h2>

                {/* Description */}
                <p className="text-white-600 text-lg mb-6">
                  Full Stack Developer specializing in web applications, 3D experiences, and scalable systems.
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    Three.js
                  </span>
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    Angular
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Portfolio
                  <svg
                    className="w-5 h-5 ml-2"
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
                </div>
              </div>
            </div>

            {/* Design & Video Portfolio Card */}
            <div
              onClick={() => navigate("/design")}
              className="group relative bg-black-200 border border-black-300 rounded-2xl p-8 hover:border-pink-500 transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-pink-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-4 font-generalsans">
                  Design & Video
                </h2>

                {/* Description */}
                <p className="text-white-600 text-lg mb-6">
                  Creative visual storytelling through graphic design, video editing, and motion graphics.
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    Premiere Pro
                  </span>
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    After Effects
                  </span>
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    Photoshop
                  </span>
                  <span className="px-3 py-1 bg-black-300 text-white-600 rounded-full text-sm">
                    Illustrator
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center text-pink-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Portfolio
                  <svg
                    className="w-5 h-5 ml-2"
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
                </div>
              </div>
            </div>
          </div>

          {/* Footer info */}
          <div className="mt-16 text-center">
            <p className="text-white-600 text-sm">
              Scroll down or click a card to explore
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
};

export default LandingPage;

