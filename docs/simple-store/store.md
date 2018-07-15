# Create a Store

Our first task is to create a store in our simple-store project.
All commands assume your current directory is the **course** directory.

To get started, create a new ***store** directory and the following files:

* actions.ts
* model.ts
* reducers.ts
* store.ts

```
mkdir projects/simple-store/src/app/store
touch projects/simple-store/src/app/store/actions.ts
touch projects/simple-store/src/app/store/models.ts
touch projects/simple-store/src/app/store/reducers.ts
touch projects/simple-store/src/app/store/store.ts
```

Open the **store.ts** file.

## Interfaces

First, create the `Action` interface. 
Each action will be a class that implements this interface, which simply requires the `type` string property.

```
export interface Action {
  type: string;
}
```

Next, create a `ReducerMap` interface.
This interface will be used to define the reducer functions associated with each property in the state object.

```
export interface ReducerMap {
  [key: string]: Function;
}
```

Finally, create the `State` interface.
This interface represents the state object.

```
export interface State {
  [key: string]: any;
}
```

## `Store` Class

Create a new `Store` class:

```
export class Store {
  private subject = new BehaviorSubject<State>(null);

  constructor(public reducers: ReducerMap, private state: State = {}) {}

  dispatch(action: Action) {
    Object.keys(this.reducers).forEach(key => {
      this.state[key] = this.reducers[key](this.state[key], action);
    });
    this.subject.next(this.state);
  }

  subscribe(
    next: (value: State) => void,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    return this.subject.subscribe(next, error, complete);
  }
}
```

* The `subject` property is a new `BehaviorSubject` with a seed value of `null`.
* The `constructor()` function requires a `reducers` object along with an optional `state` object, which defaults to an empty `Object`.
* The `dispatch()` method accepts an `action` and then invokes that `action` against each reducer function.
* The `subscribe()` method requires a `next` argument, which is a function that accepts the `State` and returns void. The `error` and `complete` arguments are optional. The method returns a new `Subscription` to the `subject`.