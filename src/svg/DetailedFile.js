import React, { useState, useEffect, useRef } from "react";
import useInterval from "../hooks/useInterval";
export default function DetailedFile({ x, y, id, scaled = true }) {
  const [scaledDown, isScaledDown] = useState(scaled);
  const pos = `translate(${x} ${y})`;
  return (
    <g className="DetailedFile" id={id}>
      <g transform={pos}>
        <path
          fill="white"
          stroke="black"
          d="M83.012,17.5c0-0.527-0.271-0.99-0.682-1.258L66.477,2.637c-0.15-0.129-0.324-0.211-0.505-0.271C65.709,2.141,65.373,2,65,2 H18.5C17.671,2,17,2.671,17,3.5v93c0,0.828,0.671,1.5,1.5,1.5h63c0.828,0,1.5-0.672,1.5-1.5V18c0-0.067-0.011-0.13-0.02-0.195 C83.001,17.707,83.012,17.604,83.012,17.5z"
        />
        {scaledDown && (
          <>
            <path d="M69,31H31c-0.552,0-1-0.448-1-1s0.448-1,1-1h38c0.553,0,1,0.448,1,1S69.553,31,69,31z" />
            <path d="M69,45H31c-0.552,0-1-0.448-1-1s0.448-1,1-1h38c0.553,0,1,0.448,1,1S69.553,45,69,45z" />
            <path d="M69,57H31c-0.552,0-1-0.447-1-1s0.448-1,1-1h38c0.553,0,1,0.447,1,1S69.553,57,69,57z" />
            <path d="M69,71H31c-0.552,0-1-0.447-1-1s0.448-1,1-1h38c0.553,0,1,0.447,1,1S69.553,71,69,71z" />
          </>
        )}
      </g>
    </g>
  );
}

/*
function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {    // Your custom logic here    setCount(count + 1);  }, 1000);
  return <h1>{count}</h1>;
}*/
