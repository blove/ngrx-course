import { Resort } from '@app/models/resort.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ResortActions, ResortActionTypes } from './resort.actions';

export interface State extends EntityState<Resort> {
  error?: Error | null;
  loading: boolean;
  searchResults: Resort[];
  selectedResortId?: string;
}

export const adapter: EntityAdapter<Resort> = createEntityAdapter<Resort>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  resorts: [],
  searchResults: []
});

export function reducer(state = initialState, action: ResortActions): State {
  switch (action.type) {
    // todo: remove entity

    case ResortActionTypes.SearchResorts:
      return {
        ...state,
        loading: true,
        error: null,
        searchResults: []
      };
    case ResortActionTypes.SearchResortsFail:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case ResortActionTypes.SearchResortsSuccess:
      return {
        ...state,
        error: null,
        loading: false,
        searchResults: action.resorts
      };
    case ResortActionTypes.SelectResort:
      return adapter.addOne(action.resort, {
        ...state,
        selectedResortId: action.resort.id
      });
    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
export const getSearchResults = (state: State) => state.searchResults;
export const getSelectedResortId = (state: State) => state.selectedResortId;
