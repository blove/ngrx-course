import { ResortEffects } from './effects';
import { resortReducer, sidenavReducer } from './reducers';
import { ReducerMap, Store } from './store';

const reducers: ReducerMap = {
  resort: resortReducer,
  sidenav: sidenavReducer
};

export const store = new Store(reducers, [ResortEffects]);
