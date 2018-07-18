import { environment } from '@env/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
