import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import { PerspectiveCamera, Float } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CanvasLoader from "../components/CanvasLoader";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import ReactLogo from "../components/ReactLogo";
import Target from "../components/Target";
import CursorTrail from "../components/CursorTrail";

// Wrapper con hover para ReactLogo
const InteractiveReactLogo = ({ position, ...props }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(
    () => {
      if (groupRef.current) {
        gsap.to(groupRef.current.scale, {
          x: hovered ? 1.15 : 1,
          y: hovered ? 1.15 : 1,
          z: hovered ? 1.15 : 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [hovered] }
  );

  return (
    <group ref={groupRef} position={position}>
      {/* Mesh invisible para detectar hover */}
      <mesh
        visible={false}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <ReactLogo position={[0, 0, 0]} {...props} />
    </group>
  );
};

// Wrapper con hover para Target
const InteractiveTarget = ({ ...props }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(
    () => {
      if (groupRef.current) {
        gsap.to(groupRef.current.scale, {
          x: hovered ? 1.3 : 1,
          y: hovered ? 1.3 : 1,
          z: hovered ? 1.3 : 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(groupRef.current.rotation, {
          y: hovered ? Math.PI / 5 + 0.3 : Math.PI / 5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [hovered] }
  );

  return (
    <group ref={groupRef}>
      {/* Mesh invisible para detectar hover */}
      <mesh
        visible={false}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <Target scale={1.2} {...props} />
    </group>
  );
};

// Wrapper con hover para Rings
const InteractiveRings = ({ position, ...props }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(
    () => {
      if (groupRef.current) {
        gsap.to(groupRef.current.scale, {
          x: hovered ? 1.2 : 1,
          y: hovered ? 1.2 : 1,
          z: hovered ? 1.2 : 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [hovered] }
  );

  return (
    <group ref={groupRef} position={position}>
      {/* Mesh invisible para detectar hover */}
      <mesh
        visible={false}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry args={[4, 4, 4]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <Rings position={[0, 0, 0]} {...props} />
    </group>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <CursorTrail />
      <div className="min-h-screen w-full bg-black relative overflow-hidden">
        {/* Background 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas
            gl={{ antialias: true }}
            camera={{ position: [0, 0, 20], fov: 75 }}
            onCreated={(state) => {
              state.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />

              {/* Objetos decorativos alrededor de las tarjetas */}
              {/* Cubos a los lados */}
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Cube position={[-12, 3, 2]} />
              </Float>
              <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
                <Cube position={[12, -3, 2]} />
              </Float>

              {/* React Logo arriba */}
              <InteractiveReactLogo position={[-6, 8, 1]} />
              <InteractiveReactLogo position={[6, 8, 1]} />

              {/* Target abajo */}
              <group position={[-10, -8, 1]}>
                <InteractiveTarget />
              </group>
              <group position={[10, -8, 1]}>
                <InteractiveTarget />
              </group>

              {/* Rings decorativos a los lados */}
              <InteractiveRings position={[-15, 0, 1]} />
              <InteractiveRings position={[15, 0, 1]} />

              {/* Cubos adicionales arriba y abajo */}
              <Float speed={1.3} rotationIntensity={0.9} floatIntensity={1.8}>
                <Cube position={[0, 10, 1]} />
              </Float>
              <Float speed={1.1} rotationIntensity={1.1} floatIntensity={2.2}>
                <Cube position={[-5, -10, 1]} />
              </Float>
              <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.6}>
                <Cube position={[5, -10, 1]} />
              </Float>
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center c-space pointer-events-none">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-generalsans">
              Alejandro González López
            </h1>
            <p className="text-2xl md:text-3xl text-gray_gradient font-generalsans">
              Choose Your Experience
            </p>
          </div>

          {/* Portfolio Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl px-4 pointer-events-auto">
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
                  Full Stack Developer specializing in web applications, 3D
                  experiences, and scalable systems.
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
                  Creative visual storytelling through graphic design, video
                  editing, and motion graphics.
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
        </div>
      </div>

      <style>{`
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
