import { SidenavAction, SidenavActionTypes } from './sidenav.actions';

export interface State {
  opened: boolean;
}

export const initialState: State = {
  opened: false
};

export function reducer(state = initialState, action: SidenavAction): State {
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
}

export const getOpened = (state: State) => state.opened;
