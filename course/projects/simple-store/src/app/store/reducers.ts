import {
  ResortActions,
  ResortAction,
  SidebarActions,
  SidebarAction
} from "./actions";
import { State } from "./store";

export const initialSidebarState = {
  hidden: true
};

export const sidebarReducer = (
  state: State = initialSidebarState,
  action: SidebarAction
): State => {
  switch (action.type) {
    case SidebarActions.HideSidebar:
      return {
        ...state,
        hidden: true
      };
    case SidebarActions.ShowSidebar:
      return {
        ...state,
        hidden: false
      };
    default:
      return state;
  }
};

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
