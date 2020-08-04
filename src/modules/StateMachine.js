export default class StateMachine {
  constructor(statechart) {
    this.history = [];
    this.state = statechart.initial;
    this.transitions = statechart.states;
    document.body.dataset.state = this.state;
  }

  transition(transitionName) {
    var nextState = this.transitions[this.state].on[transitionName];
    if (!nextState) {
      throw new Error(`invalid: ${this.state} -> ${transitionName}`);
    }
    this.history.push(transitionName);
    document.body.dataset.state = nextState;
    this.state = nextState;
    return this.state;
  }
}
