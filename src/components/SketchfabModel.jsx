/* eslint-disable react/prop-types -- The scene id and title are supplied by DesignHero. */
const SketchfabModel = ({ modelId, title }) => (
  <iframe
    id="design-scene"
    title={title}
    allowFullScreen
    allow="fullscreen; xr-spatial-tracking"
    src={`https://sketchfab.com/models/${modelId}/embed?autostart=0`}
    className="mx-auto h-[min(44svh,28rem)] w-full rounded-xl border border-white/10 bg-black"
  />
);

export default SketchfabModel;
