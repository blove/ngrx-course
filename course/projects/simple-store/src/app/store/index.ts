import { resortsReducer, sidebarReducer } from "./reducers";
import { ReducerMap, Store } from "./store";

const reducers: ReducerMap = {
  resorts: resortsReducer,
  sidebar: sidebarReducer
};

export const store = new Store(reducers);
