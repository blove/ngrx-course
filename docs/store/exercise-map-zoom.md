# Excerise: Map Zoom

To begin, checkout the *03-store-exercise* branch:

```bash
git checkout 03-store-exercise
```

🤫 The solution branch is available if you get stuck.

You can checkout the solution via:

```bash
git checkout 03-store-exercise-solution
```

## Goals

* Practice declaring actions.
* Practice declaring a reducer function.
* Practice declaring projector functions and selectors.
* Practice injecting the `Store` singleton instance.
* Practice selecting a slice of data from the state object.

## Steps

1. Create a new directory at **src/app/state/map**.
2. Declare a `SetMapZoom` action in a new file at **src/app/state/map/map.actions.ts**.
3. Declare the `reducer()` function in a new file at **src/app/state/map/map.reducer.ts** to update the `zoom` property of the current feature state.
4. Declare the `getZoom` projector function that returns the value of the `zoom` property.
5. Update the `Features` enum in **src/app/state/index.ts** with a new `map` member.
6. Update the `State` interface and the `reducers` map in **src/app/state/index.ts**.
7. Create a `mapState()` feature selector  in **src/app/state/index.ts**.
8. Create a `mapZoom()` selector in **src/app/state/index.ts**.
9. Update the `ResortsMapComponent.zoom` property to be a component input. This enables us to bind the zoom level of the map from a container component.
10. Update the `DashboardComponent` class with a new `mapZoom` property. 
11. Update the `DashboardComponent.nOnInit()` lifecycle method to select the zoom value in state.

## Try it Out

Use the Redux Devtools to dispatch the following action:

```javascript
{
  type: '[Map] Set Zoom',
  zoom: 8
}
```

The map zoom level should update based on the `zoom` value specified.