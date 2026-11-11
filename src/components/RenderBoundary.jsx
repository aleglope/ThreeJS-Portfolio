import { Component } from "react";
import PropTypes from "prop-types";

// Also catches rejected lazy imports: the boundary must live outside the chunk.
export default class RenderBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback ?? null : this.props.children; }
}
RenderBoundary.propTypes = { children: PropTypes.node, fallback: PropTypes.node };
