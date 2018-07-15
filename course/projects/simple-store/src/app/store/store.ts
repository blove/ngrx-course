import { BehaviorSubject, PartialObserver } from "rxjs";

export interface Action {
  type: string;
}

export interface ReducerMap {
  [key: string]: Function;
}

export interface State {
  [key: string]: any;
}

export class Store {
  private subject = new BehaviorSubject<State>(null);

  constructor(public reducers: ReducerMap, private state: State = {}) {}

  dispatch(action: Action) {
    Object.keys(this.reducers).forEach(key => {
      this.state[key] = this.reducers[key](this.state[key], action);
    });
    this.subject.next(this.state);
  }

  subscribe(
    next: (value: State) => void,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    return this.subject.subscribe(next, error, complete);
  }
}
