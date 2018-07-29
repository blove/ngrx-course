import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Action } from './store';

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
  private effects: Function[] = [];
  private state$ = new Subject<State>();

  constructor(
    private reducers: ReducerMap,
    effects?: { new () }[],
    private state: State = {}
  ) {
    effects.forEach(Effect => {
      const effect = new Effect();
      const props = Object.getOwnPropertyNames(effect);
      Object.getOwnPropertyNames(effect)
        .map(propertyName => effect[propertyName])
        .filter(property => typeof property === 'function')
        .forEach(fn => this.effects.push(fn));
    });
  }

  dispatch(action: Action) {
    this.notify(action);
    this.state$.next(this.state);
  }

  notify(action: Action) {
    Object.keys(this.reducers).forEach(key => {
      this.state[key] = this.reducers[key](this.state[key], action);
    });
    this.effects.forEach(effect => {
      effect(action)
        .pipe(filter(result => !!result))
        .subscribe((a: Action) => this.dispatch(a));
    });
  }

  subscribe(
    next: (value: State) => void,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    return this.state$.subscribe(next, error, complete);
  }
}
