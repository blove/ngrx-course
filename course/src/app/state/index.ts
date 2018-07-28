import { environment } from '@env/environment';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {
  getError,
  getLoading,
  getResorts,
  reducer as resortReducer,
  State as ResortState
} from './resort/resort.reducer';
import {
  getOpened,
  reducer as sidenavReducer,
  State as SidenavState
} from './sidenav/sidenav.reducer';

export enum Features {
  sidenav = 'sidenav',
  resort = 'resort'
}

export interface State {
  [Features.sidenav]: SidenavState;
  [Features.resort]: ResortState;
}

export const reducers: ActionReducerMap<State> = {
  [Features.sidenav]: sidenavReducer,
  [Features.resort]: resortReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const sidenavState = createFeatureSelector<SidenavState>(
  Features.sidenav
);
export const sidenavIsOpen = createSelector(sidenavState, getOpened);

export const resortState = createFeatureSelector<ResortState>(Features.resort);
export const resortError = createSelector(resortState, getError);
export const resortIsLoading = createSelector(resortState, getLoading);
export const resorts = createSelector(resortState, getResorts);
