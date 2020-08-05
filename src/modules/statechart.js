const statechart = {
  id: "crazy",
  initial: "overview",
  states: {
    loaded: {
      on: { next: "overview" },
    },
    overview: {
      on: {
        prev: "loaded",
        next: "addCommand",
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
        prev: "addCommandMoveFile1",
      },
    },
    addCommandMoveFile2: {
      on: {
        next: "addCommandMoveFile3",
        prev: "addCommandMoveFile2",
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
