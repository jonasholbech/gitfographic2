import React from "react";

export default function SVG({ children }) {
  return (
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}
