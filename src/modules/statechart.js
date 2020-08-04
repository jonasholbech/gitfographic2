const statechart = {
  id: "crazy",
  initial: "addCommand",
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
    about: {
      on: {
        home: "home",
        products: "products",
        contact: "contact",
      },
    },
    contact: {
      on: {
        home: "home",
        products: "products",
        about: "about",
      },
    },
  },
};
export default statechart;
