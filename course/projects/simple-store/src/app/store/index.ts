import { ResortEffects } from './effects';
import { resortReducer, sidebarReducer } from './reducers';
import { ReducerMap, Store } from './store';

const reducers: ReducerMap = {
  resort: resortReducer,
  sidebar: sidebarReducer
};

export const store = new Store(reducers, [ResortEffects]);
