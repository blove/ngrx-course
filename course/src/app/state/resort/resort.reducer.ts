import { Resort } from '@app/models/resort.model';
import { ResortActions, ResortActionTypes } from './resort.actions';

export interface State {
  error?: Error | null;
  loading: boolean;
  resorts: Resort[];
  searchResults: Resort[];
  selectedResortId?: string;
}

export const initialState: State = {
  loading: false,
  resorts: [],
  searchResults: []
};

export function reducer(state = initialState, action: ResortActions): State {
  switch (action.type) {
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
      return {
        ...state,
        resorts: [...state.resorts, action.resort],
        selectedResortId: action.resort.id
      };
    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
export const getResorts = (state: State) => state.resorts;
export const getSearchResults = (state: State) => state.searchResults;
export const getSelectedResortId = (state: State) => state.selectedResortId;
