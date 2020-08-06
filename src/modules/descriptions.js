const descriptions = {
  initial: "workingArea",
  states: {
    loaded: {
      desc: `Everything is loaded
      And I just need you to press the "next" button`,
    },
    overview: {
      desc: `From a top view, git is just
        moving stuff between four boxes`,
    },
    drawLocalBox: {
      desc: `Boxes on our own computer`,
    },
    drawRemoteBox: {
      desc: `and a box up in the cloud somewhere
        Usually GitHub`,
    },
    workingArea: {
      desc: `The folder where we have our development files
        is called the "working area"`,
    },

    addCommand: {},
    addCommandMoveFile1: {},
    addCommandMoveFile2: {},
    addCommandMoveFile3: {},
    addCommandMoveFile3Back: {},
    commitCommand: {},
    pushCommand: {},
    pullCommand: {},
  },
};
export default descriptions;
