import React, { useState } from "react";
import StateMachine from "./modules/StateMachine";
import statechart from "./modules/statechart";
import descriptions from "./modules/descriptions";

import SVG from "./svg/SVG";
import Defs from "./svg/Defs";
import TextBox from "./svg/TextBox";
import AnnotatedArrow from "./svg/AnnotatedArrow";
import File from "./svg/File";
import DrawBox from "./svg/DrawBox";
import Description from "./svg/Description";

import "./App.scss";
const machine = new StateMachine(statechart);
window.machine = machine;

function App() {
  const [text, setText] = useState(
    descriptions.states[descriptions.initial].desc
  );
  return (
    <>
      <button
        onClick={() => {
          const nextState = machine.transition("prev");
          setText(descriptions.states[nextState].desc);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          const nextState = machine.transition("next");
          setText(descriptions.states[nextState].desc);
        }}
      >
        Next
      </button>
      <SVG>
        <Defs />
        <DrawBox id="localDrawBox" x={0} y={0} width={660} height={100} />
        <DrawBox id="remoteDrawBox" x={740} y={0} width={170} height={100} />
        <TextBox
          id="workingcopy"
          width={150}
          height={80}
          x={10}
          y={10}
          text="Working Copy"
        />
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
        <File x={100} y={100} id="addCommandFileLeftBehind1" />
        <File x={100} y={100} id="addCommandFile1" />
        <File x={110} y={115} id="addCommandFileLeftBehind2" />
        <File x={110} y={115} id="addCommandFile2" />
        <File x={120} y={130} id="addCommandFileLeftBehind3" />
        <File x={120} y={130} id="addCommandFile3" />

        <File x={110} y={115} id="pushCommandFile1" />
        <File x={120} y={130} id="pushCommandFile2" />

        <File x={110} y={115} id="pullCommandFile1" />
        <File x={120} y={130} id="pullCommandFile2" />
        <AnnotatedArrow
          id="addCommand"
          x1={160}
          y1={45}
          x2={246}
          y2={45}
          offsetY={-10}
          text="add"
        />
        <AnnotatedArrow
          id="resetCommand1"
          x2={164}
          y2={65}
          x1={250}
          y1={65}
          offsetY={-10}
          text="reset"
        />

        <AnnotatedArrow
          id="commitCommand"
          x1={400}
          y1={45}
          x2={496}
          y2={45}
          offsetY={-10}
          text="commit"
        />
        <AnnotatedArrow
          id="pushCommand"
          x1={650}
          y1={45}
          x2={746}
          y2={45}
          offsetY={-10}
          text="push"
        />
        <AnnotatedArrow
          id="pullCommand"
          x2={654}
          y2={65}
          x1={750}
          y1={65}
          offsetY={-10}
          text="pull"
        />
        <Description x={200} y={100} text={text} />
      </SVG>
    </>
  );
}

export default App;
