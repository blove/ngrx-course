import { Resort } from '@app/models/resort.model';
import { Action } from '@ngrx/store';

export enum ResortActionTypes {
  DeleteResort = '[Resort] Delete',
  SearchResorts = '[Resort] Search',
  SearchResortsFail = '[Resort] Search Fail',
  SearchResortsSuccess = '[Resort] Search Success',
  SelectResort = '[Resort] Select'
}

export class DeleteResort implements Action {
  readonly type = ResortActionTypes.DeleteResort;

  constructor(public payload: { id: string }) {}
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

  constructor(public resort: Resort) {}
}

export type ResortActions =
  | DeleteResort
  | SearchResorts
  | SearchResortsFail
  | SearchResortsSuccess
  | SelectResort;
