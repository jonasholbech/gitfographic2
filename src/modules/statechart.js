const statechart = {
  id: "crazy",
  initial: "workingArea",
  states: {
    loaded: {
      on: { next: "overview" },
    },
    overview: {
      on: {
        prev: "loaded",
        next: "drawLocalBox",
      },
    },
    drawLocalBox: {
      on: {
        next: "drawRemoteBox",
        prev: "overview",
      },
    },
    drawRemoteBox: {
      on: {
        next: "workingArea",
        prev: "drawLocalBox",
      },
    },
    workingArea: {
      on: {
        next: "addCommand",
        prev: "drawRemoteBox",
      },
    },
    addCommand: {
      on: {
        next: "addCommandMoveFile1",
        prev: "overview",
      },
    },
    addCommandMoveFile1: {
      on: {
        next: "addCommandMoveFile2",
        prev: "addCommand",
      },
    },
    addCommandMoveFile2: {
      on: {
        next: "addCommandMoveFile3",
        prev: "addCommandMoveFile1",
      },
    },
    addCommandMoveFile3: {
      on: {
        next: "addCommandMoveFile3Back",
        prev: "addCommandMoveFile2",
      },
    },
    addCommandMoveFile3Back: {
      on: {
        next: "commitCommand",
        prev: "addCommandMoveFile3",
      },
    },
    commitCommand: {
      on: {
        next: "pushCommand",
        prev: "addCommandMoveFile3Back",
      },
    },
    pushCommand: {
      on: {
        next: "pullCommand",
        prev: "commitCommand",
      },
    },
    pullCommand: {
      on: {
        next: "",
        prev: "pushCommand",
      },
    },
  },
};
export default statechart;
