import {
  ResortAction,
  ResortActions,
  SidenavAction,
  SidenavActions
} from './actions';
import { State } from './store';

export const initialSidenavState = {
  hidden: true
};

export const sidenavReducer = (
  state: State = initialSidenavState,
  action: SidenavAction
): State => {
  switch (action.type) {
    case SidenavActions.HideSidenav:
      return {
        ...state,
        hidden: true
      };
    case SidenavActions.ShowSidenav:
      return {
        ...state,
        hidden: false
      };
    default:
      return state;
  }
};

export const initialResortState = {
  error: null,
  loading: false,
  resorts: []
};

export const resortReducer = (
  state: State = initialResortState,
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
