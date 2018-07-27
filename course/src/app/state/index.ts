import { environment } from '@env/environment';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {
  getOpened,
  reducer as sidenavReducer,
  State as SidenavState
} from './sidenav/sidenav.reducer';

export enum Features {
  sidenav = 'sidenav'
}

export interface State {
  [Features.sidenav]: SidenavState;
}

export const reducers: ActionReducerMap<State> = {
  [Features.sidenav]: sidenavReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const sidenavState = createFeatureSelector<SidenavState>(
  Features.sidenav
);

export const isOpened = createSelector(sidenavState, getOpened);
