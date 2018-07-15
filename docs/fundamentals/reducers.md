# NgRx Reducers

* Pure functions
* Accept the current state and the action to be performed
* We can default the current state to an initial state

## Example Reducer

```javascript
export const userReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case UserActions.AddUserSuccess {
      return {
        ...state,
        users: [
          ...state.users,
          action.user
        ]
      }
    }
    default:
      return state
  }
};
```

* We default the `state` argument to some `initialState`
* Reducer return type is `State`
* We do not mutate the state object
* Use spread operator to create shallow clone