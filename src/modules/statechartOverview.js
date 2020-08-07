import { initialState } from "./config";
const statechart = {
  id: "overview",
  initial: initialState,
  states: {
    loaded: {
      on: { next: "whatIsGit" },
    },
    whatIsGit: {
      on: {
        next: "overview",
        prev: "loaded",
      },
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
        next: "gitIgnoreSceneSet",
        prev: "pushCommand",
      },
    },
    gitIgnoreSceneSet: {
      on: {
        next: "gitIgnoreSceneSet2",
        prev: "pullCommand",
      },
    },
    gitIgnoreSceneSet2: {
      on: {
        next: "gitIgnoreFile",
        prev: "gitIgnoreSceneSet",
      },
    },
    gitIgnoreFile: {
      on: {
        next: "gitIgnoreFileMovedBack",
        prev: "gitIgnoreSceneSet2",
      },
    },
    gitIgnoreFileMovedBack: {
      on: {
        next: "beforeCommits",
        prev: "gitIgnoreFile",
      },
    },
    beforeCommits: {
      on: {
        next: "commits1",
        prev: "gitIgnoreFileMovedBack",
      },
    },
    commits1: {
      on: {
        next: "commits2",
        prev: "beforeCommits",
      },
    },
    commits2: {
      on: {
        next: "commits3",
        prev: "commits1",
      },
    },
    commits3: {
      on: {
        next: "commits4",
        prev: "commits2",
      },
    },
    commits4: {
      on: {
        next: "commits5",
        prev: "commits3",
      },
    },
    commits5: {
      on: {
        next: "commits6",
        prev: "commits4",
      },
    },
    commits6: {
      on: {
        next: "commits7",
        prev: "commits5",
      },
    },
    commits7: {
      on: {
        next: "commitsDeeper1",
        prev: "commits6",
      },
    },
  },
};
export default statechart;
