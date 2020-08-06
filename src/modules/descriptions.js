const descriptions = {
  initial: "loaded",
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
    stagingArea: {
      desc: `The staging area is a temporary "folder"
            Where you gather the files you would like to store in the next commit`,
    },
    localRepository: {
      desc: `The Local Repository, or local repo,
      is where all your local 
      commits, branches etc are stored.
    This is where your "save games" are located`,
    },
    remoteRepository: {
      desc: `This is your online backup,
        it's a copy of your local repository.
        This is also where team members gets your code`,
    },
    addCommand: {
      desc: `Files are marked to be staged using the "add" command`,
    },
    addCommandMoveFile1: {
      desc: `You can mark individual files`,
    },
    addCommandMoveFile2and3: {
      desc: `or multiple`,
    },
    addCommandMoveFile3Back: {
      desc: `If you are not satisfied with your choices
        you can "unstage" a file with the "reset" command`,
    },
    commitCommand: {
      desc: `When you have staged all the files you need to
        You can make a "save game" containing
        - all your previous code
        - everything you've staged
        Once commited, the staged files becomes "unstaged"`,
    },
    pushCommand: {
      desc: `To back up your work,
        or share it with your team,
        use the "push" command to put everything online.
        Usually on GitHub.
        Now it's available for your team.
        AND you have a copy online`,
    },
    pullCommand: {
      desc: `To get back your code (when you've messed up)
        or when a team mate has pushed something you need,
        issue a "pull" command`,
    },
  },
};
export default descriptions;
