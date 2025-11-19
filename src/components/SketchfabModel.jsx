import { useMediaQuery } from "react-responsive";

const SketchfabModel = ({ modelId, title, scale = 1, position = [0, 0, 0] }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Calcular tamaño responsivo
  const getModelSize = () => {
    if (isMobile) {
      return { width: "300px", height: "400px" };
    }
    if (isTablet) {
      return { width: "400px", height: "500px" };
    }
    return { width: "500px", height: "600px" };
  };

  const size = getModelSize();

  return (
    <div
      className="absolute pointer-events-auto"
      style={{
        width: size.width,
        height: size.height,
        transform: `translate(${position[0]}px, ${position[1]}px) scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <iframe
        title={title}
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src={`https://sketchfab.com/models/${modelId}/embed?autostart=1&ui_hint=0&ui_infos=0&ui_controls=0&ui_stop=0`}
        className="w-full h-full rounded-lg shadow-2xl"
        style={{
          border: "none",
        }}
      />
    </div>
  );
};

export default SketchfabModel;

