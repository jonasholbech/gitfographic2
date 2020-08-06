const statechart = {
  id: "crazy",
  initial: "loaded",
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
        next: "stagingArea",
        prev: "drawRemoteBox",
      },
    },
    stagingArea: {
      on: {
        next: "localRepository",
        prev: "workingArea",
      },
    },
    localRepository: {
      on: {
        next: "remoteRepository",
        prev: "stagingArea",
      },
    },
    remoteRepository: {
      on: {
        next: "addCommand",
        prev: "localRepository",
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
        next: "addCommandMoveFile2and3",
        prev: "addCommand",
      },
    },

    addCommandMoveFile2and3: {
      on: {
        next: "addCommandMoveFile3Back",
        prev: "addCommandMoveFile1",
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
