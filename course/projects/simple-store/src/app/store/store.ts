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
  constructor(public reducers: ReducerMap, private state: State = {}) {}

  dispatch(action: Action) {
    Object.keys(this.reducers).forEach(key => {
      this.state[key] = this.reducers[key](this.state[key], action);
    });
    console.log(this.state);
  }
}
