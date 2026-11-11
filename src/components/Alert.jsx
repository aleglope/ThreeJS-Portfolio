import PropTypes from "prop-types";

const Alert = ({ type, text }) => (
  <div role={type === "danger" ? "alert" : "status"}
    className={`rounded-lg border p-4 leading-relaxed ${type === "danger" ? "border-red-300/40 bg-red-950 text-red-100" : "border-emerald-300/40 bg-emerald-950 text-emerald-100"}`}>
    {text}
  </div>
);

Alert.propTypes = { type: PropTypes.string, text: PropTypes.string.isRequired };
export default Alert;
