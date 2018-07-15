import { environment } from '@env/environment';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {
  reducer as dialogReducer,
  State as DialogState
} from './dialog/dialog.reducer';
import {
  getZoom,
  reducer as mapReducer,
  State as MapState
} from './map/map.reducer';
import {
  adapter as resortAdapter,
  getError,
  getLoading,
  getSearchResults,
  getSelectedResortId,
  reducer as resortReducer,
  State as ResortState
} from './resort/resort.reducer';
import {
  getOpened,
  reducer as sidenavReducer,
  State as SidenavState
} from './sidenav/sidenav.reducer';

export enum Features {
  dialog = 'dialog',
  map = 'map',
  sidenav = 'sidenav',
  resort = 'resort'
}

export interface State {
  [Features.dialog]: DialogState;
  [Features.map]: MapState;
  [Features.sidenav]: SidenavState;
  [Features.resort]: ResortState;
}

export const reducers: ActionReducerMap<State> = {
  [Features.dialog]: dialogReducer,
  [Features.map]: mapReducer,
  [Features.sidenav]: sidenavReducer,
  [Features.resort]: resortReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const mapState = createFeatureSelector<MapState>(Features.map);
export const mapZoom = createSelector(mapState, getZoom);

export const sidenavState = createFeatureSelector<SidenavState>(
  Features.sidenav
);
export const sidenavIsOpen = createSelector(sidenavState, getOpened);

export const resortState = createFeatureSelector<ResortState>(Features.resort);
export const {
  selectIds: resortIds,
  selectEntities: resortEntities,
  selectAll: resorts,
  selectTotal: totalResorts
} = resortAdapter.getSelectors(resortState);
export const resortError = createSelector(resortState, getError);
export const resortIsLoading = createSelector(resortState, getLoading);
export const searchResults = createSelector(resortState, getSearchResults);
export const selectedResortId = createSelector(
  resortState,
  getSelectedResortId
);
export const selectedResort = createSelector(
  resorts,
  selectedResortId,
  (entities, id) => id && entities.find(resort => resort.id === id)
);
