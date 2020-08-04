import React from "react";
import SVG from "./svg/SVG";
import Defs from "./svg/Defs";
import Arrow from "./svg/Arrow";
import TextBox from "./svg/TextBox";
import AnnotatedArrow from "./svg/AnnotatedArrow";
import "./App.css";

function App() {
  return (
    <SVG>
      <Defs />
      <TextBox width={150} height={80} x={10} y={10} text="Working Copy" />
      <AnnotatedArrow
        x1={160}
        y1={45}
        x2={250}
        y2={45}
        offsetY={-10}
        text="add"
      />
      <TextBox width={150} height={80} x={250} y={10} text="Staging Area" />
      <TextBox width={150} height={80} x={500} y={10} text="Local Repository" />
      <TextBox
        width={150}
        height={80}
        x={750}
        y={10}
        text="Remote Repository"
      />
    </SVG>
  );
}

export default App;
