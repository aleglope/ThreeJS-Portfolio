import { Component, Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Float } from "@react-three/drei";
import Cube from "../../components/Cube.jsx";
import Rings from "../../components/Rings.jsx";

class DecorationBoundary extends Component {
  state = { unavailable: false };
  static getDerivedStateFromError() { return { unavailable: true }; }
  render() { return this.state.unavailable ? null : this.props.children; }
}
DecorationBoundary.propTypes = { children: PropTypes.node };

export default function DesignDecoration() {
  return <DecorationBoundary>
    <Canvas dpr={[1, 1.5]} className="h-full w-full">
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2}>
          <Cube position={[9, -4, 0]} />
        </Float>
        <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
          <Cube position={[-9, 4, 0]} />
        </Float>
        <Rings position={[-15, 8, -5]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 10]} intensity={0.7} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#00ffff" />
      </Suspense>
    </Canvas>
  </DecorationBoundary>;
}
