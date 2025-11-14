import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.5}
    >
      {/* Target stand/base */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 8]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>

      {/* Target rings */}
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.8, 1, 16]} />
        <meshStandardMaterial color="#ef4444" side={2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.6, 0.8, 16]} />
        <meshStandardMaterial color="#f97316" side={2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.4, 0.6, 16]} />
        <meshStandardMaterial color="#eab308" side={2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.2, 0.4, 16]} />
        <meshStandardMaterial color="#22c55e" side={2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0, 0.2, 16]} />
        <meshStandardMaterial color="#3b82f6" side={2} />
      </mesh>

      {/* Center bullseye */}
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
    </group>
  );
};

export default Target;
