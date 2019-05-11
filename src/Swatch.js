import React from "react";

const Swatch = ({ color, width, height, x, y }) => (
  <rect width={width} height={height} x={x} y={y} style={{ fill: color }} />
);

export default Swatch;
