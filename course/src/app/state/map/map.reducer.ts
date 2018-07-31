import { MapAction, MapActionTypes } from './map.actions';

export interface State {
  zoom: number;
}

export const initialState: State = {
  zoom: 10
};

export function reducer(state = initialState, action: MapAction): State {
  switch (action.type) {
    case MapActionTypes.SetZoom:
      return {
        ...state,
        zoom: action.zoom
      };
    default:
      return state;
  }
}

export const getZoom = (state: State) => state.zoom;
