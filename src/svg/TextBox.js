import React from "react";

export default function TextBox({ width, height, x, y, text }) {
  const textX = Number(x) + Number(width) / 2;
  const textY = Number(y) + Number(height) / 2;
  return (
    <g id="workingareabox">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="transparent"
        stroke="black"
      />
      <text x={textX} y={textY} dominant-baseline="middle" text-anchor="middle">
        {text}
      </text>
    </g>
  );
}
