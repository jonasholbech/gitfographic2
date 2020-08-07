import React, { useState } from "react";
import StateMachine from "./modules/StateMachine";
import statechartOverview from "./modules/statechartOverview";
import descriptions from "./modules/descriptions";

import SVG from "./svg/SVG";
import Defs from "./svg/Defs";
import TextBox from "./svg/TextBox";
import AnnotatedArrow from "./svg/AnnotatedArrow";
import File from "./svg/File";
import DrawBox from "./svg/DrawBox";
import Description from "./svg/Description";
import TypewriterDescription from "./svg/TypewriterDescription";
import CommitList from "./svg/CommitList";
//import DetailedFile from "./svg/DetailedFile";
import "./App.scss";
const machine = new StateMachine(statechartOverview);
function App() {
  const [typewriter, setTypewriter] = useState(false);
  const [text, setText] = useState(
    descriptions.states[descriptions.initial].desc
  );
  const [x, setX] = useState(200);
  const [y, setY] = useState(100);
  const [commitListStep, setCommitListStep] = useState(-1);

  function switchState(next) {
    const nextState = machine.transition(next);

    switch (nextState) {
      case "workingArea":
        setX(300);
        break;
      case "stagingArea":
        setX(450);
        break;
      case "localRepository":
        setX(140);
        setY(130);
        break;
      case "gitIgnoreFile":
        setTypewriter(true);
        setX(390);
        setY(40);
        break;
      case "commits1":
      case "commits2":
      case "commits3":
      case "commits4":
      case "commits5":
        setCommitListStep((count) => count + 1);
        break;
      case "commits6":
        setCommitListStep((count) => count - 2);
        break;
      default:
        setTypewriter(false);
        setX(200);
    }
    setText(descriptions.states?.[nextState]?.desc);
  }

  return (
    <>
      <button
        onClick={() => {
          switchState("prev");
        }}
      >
        Previous (breaks)
      </button>
      <button
        onClick={() => {
          switchState("next");
        }}
      >
        Next
      </button>
      <SVG>
        <Defs />
        <g id="sceneOverview">
          <DrawBox id="localDrawBox" x={0} y={0} width={660} height={100} />
          <DrawBox id="remoteDrawBox" x={740} y={0} width={170} height={100} />
          <DrawBox
            id="workingAreaDrawBox"
            x={0}
            y={0}
            width={170}
            height={300}
          />

          <DrawBox
            id="stagingAreaDrawBox"
            x={240}
            y={0}
            width={170}
            height={300}
          />
          <DrawBox
            id="localRepositoryDrawBox"
            x={490}
            y={0}
            width={170}
            height={300}
          />
          <DrawBox
            id="remoteRepositoryDrawBox"
            x={740}
            y={0}
            width={170}
            height={300}
          />
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
          <File x={20} y={100} id="addCommandFileLeftBehind1" />
          <File x={20} y={100} id="addCommandFile1" />
          <File x={30} y={115} id="addCommandFileLeftBehind2" />
          <File x={30} y={115} id="addCommandFile2" />
          <File x={40} y={130} id="addCommandFileLeftBehind3" />
          <File x={40} y={130} id="addCommandFile3" />

          <File x={110} y={115} id="pushCommandFile1" />
          <File x={120} y={130} id="pushCommandFile2" />

          <File x={90} y={115} id="pullCommandFile1" />
          <File x={90} y={130} id="pullCommandFile2" />
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
        </g>
        <g id="sceneGitignore">
          <TextBox
            id="workingcopyGitignore"
            width={150}
            height={80}
            x={10}
            y={10}
            text="Working Copy"
          />
          <g id="gitignoreFileSmall">
            <File x={10} y={100} id="" />
            <text x={30} y={220}>
              .gitignore
            </text>
          </g>
        </g>
        <g id="sceneCommitsExplained">
          <CommitList x="100" y="100" step={commitListStep} />
        </g>
        {!typewriter && <Description x={x} y={y} text={text} />}
        {typewriter && (
          <TypewriterDescription
            x={x}
            y={y}
            text={text}
            typewriter={typewriter}
            startDelay={2000}
            doneCallback={(e) => setTypewriter(false)}
          />
        )}
      </SVG>
    </>
  );
}

export default App;
