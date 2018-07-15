import {
  ResortAction,
  ResortActions,
  SidenavAction,
  SidenavActionTypes
} from './actions';
import { State } from './store';

export const initialSidenavState = {
  opened: false
};

export const sidenavReducer = (
  state: State = initialSidenavState,
  action: SidenavAction
): State => {
  switch (action.type) {
    case SidenavActionTypes.HideSidenav:
      return {
        ...state,
        opened: false
      };
    case SidenavActionTypes.ShowSidenav:
      return {
        ...state,
        opened: true
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
