import { Resort } from "./models";
import { ResortActions, ResortAction } from "./actions";
import { State } from "./store";

export const initialResortsState = {
  error: null,
  loading: false,
  resorts: []
};

export const resortsReducer = (
  state: State = initialResortsState,
  action: ResortAction
): State => {
  switch (action.type) {
    case ResortActions.LoadResorts:
      return {
        ...state,
        loading: true
      };
    case ResortActions.LoadResortsFail:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case ResortActions.LoadResortsSuccess:
      return {
        ...state,
        error: null,
        loading: false,
        resorts: action.resorts
      };
    default:
      return state;
  }
};

export const allResorts = state => state.resorts;
export const resortCount = state => state.resorts.length;
