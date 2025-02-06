import { useEffect, useState, useCallback } from "react";

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const maxTrails = 12; // Aumentamos la cantidad de puntos
  const trailLifetime = 1000; // 1 segundo de vida para cada punto

  const cleanupTrails = useCallback(() => {
    const now = Date.now();
    setTrails((prevTrails) =>
      prevTrails.filter((trail) => now - trail.id < trailLifetime)
    );
  }, []);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      setTrails((prevTrails) => {
        const newTrail = {
          x: clientX,
          y: clientY,
          id: Date.now(),
          size: Math.random() * 4 + 6, // Tamaño aleatorio entre 6px y 10px
          rotation: Math.random() * 360, // Rotación aleatoria
        };

        const updatedTrails = [...prevTrails, newTrail].slice(-maxTrails);
        return updatedTrails;
      });
    };

    // Configurar limpieza periódica
    const cleanupInterval = setInterval(cleanupTrails, trailLifetime / 2);

    // Agregar event listener con throttling
    let lastMove = 0;
    const throttledMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMove >= 16) {
        // Aproximadamente 60fps
        lastMove = now;
        handleMouseMove(e);
      }
    };

    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      clearInterval(cleanupInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cleanupTrails]);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            width: `${trail.size}px`,
            height: `${trail.size}px`,
            transform: `rotate(${trail.rotation}deg)`,
            opacity: Math.max(0, 1 - (Date.now() - trail.id) / trailLifetime),
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
