import { useEffect, useState, useCallback, useRef } from "react";

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const maxTrails = 12;
  const trailLifetime = 1000;
  const trailIdCounter = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const lastUpdateRef = useRef(0);

  const cleanupTrails = useCallback(() => {
    const now = Date.now();
    setTrails((prevTrails) =>
      prevTrails.filter((trail) => trail.timestamp && now - trail.timestamp < trailLifetime)
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      mousePositionRef.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer' ||
        target.closest('[class*="cursor-pointer"]') ||
        target.closest('a') ||
        target.closest('button')
      );
      setIsHoveringInteractive(isInteractive);

      // Throttle updates to prevent too frequent state changes
      if (now - lastUpdateRef.current > 50) { // ~20fps instead of 60fps
        lastUpdateRef.current = now;

        setTrails((prevTrails) => {
          trailIdCounter.current += 1;
          const newTrail = {
            x: mousePositionRef.current.x,
            y: mousePositionRef.current.y,
            id: trailIdCounter.current,
            timestamp: now,
            size: Math.random() * 4 + 6,
            rotation: Math.random() * 360,
            isInteractive,
          };

          const updatedTrails = [...prevTrails, newTrail].slice(-maxTrails);
          return updatedTrails;
        });
      }
    };

    // Cleanup interval
    const cleanupInterval = setInterval(cleanupTrails, trailLifetime / 2);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, [cleanupTrails]);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className={`cursor-trail ${trail.isInteractive ? 'cursor-trail-interactive' : ''}`}
          style={{
            left: `${trail.x || 0}px`,
            top: `${trail.y || 0}px`,
            width: `${trail.size || 8}px`,
            height: `${trail.size || 8}px`,
            transform: `rotate(${trail.rotation || 0}deg)`,
            opacity: trail.timestamp ? Math.max(0, 1 - (Date.now() - trail.timestamp) / trailLifetime) : 1,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
