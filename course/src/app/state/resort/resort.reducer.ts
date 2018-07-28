import { Resort } from '@app/models/resort.model';
import { ResortActions, ResortActionTypes } from './resort.actions';

export interface State {
  error?: Error | null;
  loading: boolean;
  resorts: Resort[];
  selectedResortId?: string;
}

export const initialState: State = {
  loading: false,
  resorts: []
};

export function reducer(state = initialState, action: ResortActions): State {
  switch (action.type) {
    case ResortActionTypes.SearchResorts:
      return {
        ...state,
        loading: true,
        error: null,
        resorts: []
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
        resorts: action.resorts
      };
    case ResortActionTypes.SelectResort:
      return {
        ...state,
        selectedResortId: action.id
      };
    default:
      return state;
  }
}

export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
export const getResorts = (state: State) => state.resorts;
export const getSelectedResortId = (state: State) => state.selectedResortId;
