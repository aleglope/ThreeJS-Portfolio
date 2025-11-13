import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Float } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import Cube from "../../components/Cube.jsx";
import Rings from "../../components/Rings.jsx";
import Button from "../../components/Button.jsx";

const DesignHero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Alejandro <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          Creative Designer & Video Editor
        </p>
      </div>
      
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <group>
              <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2}>
                <Cube 
                  position={isMobile ? [5, -3, 0] : [9, -4, 0]} 
                  scale={isMobile ? 0.8 : 1}
                />
              </Float>
              
              <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
                <Cube 
                  position={isMobile ? [-5, 3, 0] : [-9, 4, 0]}
                  scale={isMobile ? 0.8 : 1}
                />
              </Float>
              
              <Rings position={isMobile ? [0, 0, -5] : [-15, 8, -5]} />
            </group>
            
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 10]} intensity={0.7} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
            <pointLight position={[10, 10, 5]} intensity={0.5} color="#00ffff" />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#design-projects" className="w-fit">
          <Button
            name="View My Work"
            isBeam
            cotainerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default DesignHero;

