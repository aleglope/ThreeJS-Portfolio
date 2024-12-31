import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Cube = ({ validPropsOnly = {}, ...props }) => {
    const { nodes } = useGLTF('models/cube.glb');
    const texture = useTexture('textures/cube.png');
    const cubeRef = useRef();
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (cubeRef.current) {
            const animation = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.5,
            });

            animation.to(cubeRef.current.rotation, {
                y: hovered ? '+=2' : `+=${Math.PI * 2}`,
                x: hovered ? '+=2' : `-=${Math.PI * 2}`,
                duration: 2.5,
                stagger: {
                    each: 0.15,
                },
            });

            return () => animation.kill(); // Limpieza al desmontar
        }
    }, [hovered]);

    return (
        <Float floatIntensity={2}>
            <group
                position={[9, -4, 0]}
                rotation={[2.6, 0.8, -1.8]}
                scale={0.74}
                dispose={undefined} // Cambiado de null a undefined
                {...validPropsOnly} // Asegura que los props sean válidos
            >
                <mesh
                    ref={cubeRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={nodes.Cube.material}
                    onPointerEnter={() => setHovered(true)}
                    onPointerLeave={() => setHovered(false)} // Evita quedarse en hover
                >
                    <meshMatcapMaterial
                        matcap={texture}
                        toneMapped={false} // <- Asegúrate de que esto sea compatible
                    />
                </mesh>
            </group>
        </Float>
    );
};

useGLTF.preload('models/cube.glb');

export default Cube;