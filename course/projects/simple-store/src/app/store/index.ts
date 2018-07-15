import { resortsReducer } from "./reducers";
import { ReducerMap, Store } from "./store";

const reducers: ReducerMap = {
  resorts: resortsReducer
};

export const store = new Store(reducers);
