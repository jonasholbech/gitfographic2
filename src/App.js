import React from "react";
import StateMachine from "./modules/StateMachine";
import statechart from "./modules/statechart";

import SVG from "./svg/SVG";
import Defs from "./svg/Defs";
import TextBox from "./svg/TextBox";
import AnnotatedArrow from "./svg/AnnotatedArrow";
import File from "./svg/File";
import "./App.scss";
const machine = new StateMachine(statechart);
window.machine = machine;

function App() {
  return (
    <>
      <button
        onClick={() => {
          machine.transition("prev");
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          machine.transition("next");
        }}
      >
        Next
      </button>
      <SVG>
        <Defs />
        <TextBox
          id="workingcopy"
          width={150}
          height={80}
          x={10}
          y={10}
          text="Working Copy"
        />
        <AnnotatedArrow
          id="addCommand"
          x1={160}
          y1={45}
          x2={250}
          y2={45}
          offsetY={-10}
          text="add"
        />
        <File x={100} y={100} id="addCommandFile1" />
        <File x={110} y={115} id="addCommandFile2" />
        <File x={120} y={130} id="addCommandFile3" />
        <TextBox
          id="stagingarea"
          width={150}
          height={80}
          x={250}
          y={10}
          text="Staging Area"
        />
        <TextBox
          id="localrepository"
          width={150}
          height={80}
          x={500}
          y={10}
          text="Local Repository"
        />
        <TextBox
          id="remoterepository"
          width={150}
          height={80}
          x={750}
          y={10}
          text="Remote Repository"
        />
      </SVG>
    </>
  );
}

export default App;
