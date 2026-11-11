import PropTypes from "prop-types";
const SketchfabModel = ({ modelId, title, className = "w-full aspect-[5/6]" }) => {
  return (
    <div
      className={`relative pointer-events-auto ${className}`}
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
        className="block w-full h-full rounded-lg shadow-2xl"
        style={{
          border: "none",
        }}
      />
    </div>
  );
};

SketchfabModel.propTypes = { modelId: PropTypes.string.isRequired, title: PropTypes.string.isRequired, className: PropTypes.string };
export default SketchfabModel;
