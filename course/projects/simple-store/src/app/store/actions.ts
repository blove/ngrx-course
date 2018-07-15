import { Action } from "./store";
import { Resort } from "./models";

export enum ResortActions {
  LoadResorts = "[resort] Load resorts",
  LoadResortsFail = "[resort] Load resorts fail",
  LoadResortsSuccess = "[resort] Load resorts success"
}

export class LoadResorts implements Action {
  readonly type = ResortActions.LoadResorts;
}

export class LoadResortsFail implements Action {
  readonly type = ResortActions.LoadResortsFail;

  constructor(public error: Error) {}
}

export class LoadResortsSuccess implements Action {
  readonly type = ResortActions.LoadResortsSuccess;

  constructor(public resorts: Resort[]) {}
}

export type ResortAction = LoadResorts | LoadResortsSuccess | LoadResortsFail;
