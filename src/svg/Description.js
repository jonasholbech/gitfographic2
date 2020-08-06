import React, { useState } from "react";
import useInterval from "../hooks/useInterval";
export default function Description({ x, y, text, typewriter = false }) {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  if (!text) {
    return <g transform={`translate(${x} ${y})`}></g>;
  }
  return (
    <g id="Description" transform={`translate(${x} ${y})`}>
      <text x={x} y={y}>
        {text.split("\n").map((t, i) => {
          return (
            <tspan key={i} x={0} dy="1.2em">
              {t.trim()}
            </tspan>
          );
        })}
      </text>
    </g>
  );
}
