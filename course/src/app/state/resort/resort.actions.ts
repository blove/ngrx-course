import { Resort } from '@app/models/resort.model';
import { Action } from '@ngrx/store';

export enum ResortActionTypes {
  SearchResorts = '[Resort] Search',
  SearchResortsFail = '[Resort] Search Fail',
  SearchResortsSuccess = '[Resort] Search Success',
  SelectResort = '[Resort] Select'
}

export class SearchResorts implements Action {
  readonly type = ResortActionTypes.SearchResorts;

  constructor(public q: string) {}
}

export class SearchResortsFail implements Action {
  readonly type = ResortActionTypes.SearchResortsFail;

  constructor(public error: Error) {}
}

export class SearchResortsSuccess implements Action {
  readonly type = ResortActionTypes.SearchResortsSuccess;

  constructor(public resorts: Resort[]) {}
}

export class SelectResort implements Action {
  readonly type = ResortActionTypes.SelectResort;

  constructor(public id: string) {}
}

export type ResortActions =
  | SearchResorts
  | SearchResortsFail
  | SearchResortsSuccess
  | SelectResort;
