# Side Effects

What is a side effect?
According to wikipedia a [side effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) is:

> A function or expression is said to have a side effect if it modifies some state outside its local environment or has an observable interaction with the outside world besides returning a value.

Some examples of side effects as a result of an action might include:

* HTTP requests
* Loading indicators
* Logging
* Displaying a loading indicator
* Displaying a toast/snackbar

To get started, create a new file **src/app/store/effects.ts** and open it in your editor of choice.

## `ResortEffects`

Let's create a new `ResortEffects` class:

```javascript
export class ResortEffects {
  load = (action: Action) => {
    if (action.type !== ResortActions.LoadResorts) {
      return of(null);
    }
    return ResortService.loadAll().pipe(
      map(resorts => new LoadResortsSuccess(resorts))
    );
  };
}
```

* The `load` property is a function that accepts the current `action` that has been dispatched.
* The function returns an `Observable` that can optionally be another `Action` to dispatch.
* We first check if the current `action` is the `LoadResorts` action. If not, we just return an `Observable` of `null`.
* Otherwise, we invoke the `loadAll()` static method in the `ResortService` class and `map()` the returned array of `resorts` to a new `LoadResortsSuccess` action.

## Update `Store`

Our next task is to update the `Store` class to support side effects.

Open the **src/app/store/store.ts** file and define a new `effects` property in the `Store` class:

```javascript
private effects: Function[] = [];
```

This will store an array of functions, which we'll create from each effect class that is specified in the `constructor()` function:

```javascript
constructor(
  private reducers: ReducerMap,
  effects?: { new () }[],
  private state: State = {}
) {
  effects.forEach(Effect => {
    const effect = new Effect();
    const props = Object.getOwnPropertyNames(effect);
    Object.getOwnPropertyNames(effect)
      .map(propertyName => effect[propertyName])
      .filter(property => typeof property === 'function')
      .forEach(fn => this.effects.push(fn));
  });
}
```

* We add a new optional `effects` argument, which is an array of classes (objects that have a constructor function).
* Iterate over each `Effect` and new up the class.
* Use the `getOwnPropertyNames()` method to obtain an array of property names (string values).
* Iterate over each property name and map each string to the property value, then filter for only values that are functions, and then `push()` each function onto the `effects` array.

Then, update the `notify()` method:

```javascript
notify(action: Action) {
  Object.keys(this.reducers).forEach(key => {
    this.state[key] = this.reducers[key](this.state[key], action);
  });
  this.effects.forEach(effect => {
    effect(action)
      .pipe(filter(result => !!result))
      .subscribe((action: Action) => this.dispatch(action));
  });
}
```

* Iterate over the array of `effects`, invoking each function.
* Then `filter()` out any results that are not truthy. This will avoid attempting to dispatch the `null` value we defined for when we do not want to dispatch another action from an effect.
* Finally, `subscribe()` to the `Observable` and `dispatch()` the next `action`.

## Update new `store`

Open **src/app/store/index.ts** and specify an array of effect classes:

```javascript
export const store = new Store(reducers, [ResortEffects]);
```