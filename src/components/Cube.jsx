import gsap from "gsap";
import { useEffect, useRef, useState, useCallback } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";

const Cube = ({ validPropsOnly = {}, ...props }) => {
  const { nodes } = useGLTF("models/cube.glb");
  const texture = useTexture("textures/cube.png");
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  const handlePointerEnter = useCallback(() => setHovered(true), []);
  const handlePointerLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    if (cubeRef.current) {
      const animation = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      animation.to(cubeRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });

      return () => animation.kill();
    }
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={undefined}
        {...validPropsOnly}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");

export default Cube;
