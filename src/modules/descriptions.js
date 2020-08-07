import { initialState } from "./config";
const descriptions = {
  initial: initialState,
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
    gitIgnoreSceneSet: {
      desc: `Let's explore our working copy a bit more
      It's is the files as they are on our computer.
      
      All files you add to the folder is waiting to be either 
      - tracked
      - excluded from tracking`,
    },
    gitIgnoreSceneSet2: {
      desc: `Tracking was done by "adding" the file. Thereby telling git to keep track of it.
        Excluding a file is done by
        - not adding it (which is error prone, I have added files by accident countless times)
        - or writing the file name in a special file called ".gitignore"
        Let's take a look at this file`,
    },
    gitIgnoreFile: {
      desc: `#in this file we list the
      #files/folders that should
      # never be tracked, like:
      notes.txt
      *.psd
      wireframes/
      node_modules/
      myWeekendPlans.*
      
      #once written here, they
      #can no longer be added 
      #to staging`,
    },
    gitIgnoreFileMovedBack: {
      desc: `In general, add files to .gitignore that are
        - not needed for the project to run
        - is generated by the code
        - not needed by other team members`,
    },
  },
};
export default descriptions;
