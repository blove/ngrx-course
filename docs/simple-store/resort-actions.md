# Resort Actions

Let's create some actions for loading resorts.

Open the **src/app/store/actions.ts** file.

## `ResortActions` Enum

```javascript
export enum ResortActions {
  LoadResorts = '[resorts] Load',
  LoadResortsFail = '[resorts] Load fail',
  LoadResortsSuccess = '[resorts] Load success'
}
```

## Action Classes

Next, create three new classes:

1. LoadResorts
2. LoadResortsFail
3. LoadResortsSuccess

```javascript
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
```

* The `LoadResorts` indicates that we are starting to fetch data from the API.
* The `LoadResortsFail` action indicates that an error occurred.
* The `LoadResortsSuccess` action indicates that the data was retrieved. 

## Type Union

Finally, create a new type that is a union of the action classes:

```javascript
export type ResortAction = LoadResorts | LoadResortsSuccess | LoadResortsFail;
```
