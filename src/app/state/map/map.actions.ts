import { Action } from '@ngrx/store';

export enum MapActionTypes {
  SetZoom = '[Map] Set Zoom'
}

export class SetMapZoom implements Action {
  readonly type = MapActionTypes.SetZoom;

  constructor(public zoom: number) {}
}

export type MapAction = SetMapZoom;
