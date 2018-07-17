# NgRX Effects

* Perform side effects, often asynchronous
* Listen for actions
* Optionally dispatch one or more actions
* Reactive

```javascript
@Injectable()
export class UserEffects {

  @Effect()
  add: Observable<Action> = this.actions$
    .ofType<AddUserAction>(UserActionTypes.AddUser)
    .pipe(
      exhaustMap(action =>
        this.service
          .save(action.user)
          .pipe(
            map(user => new AddUserSuccess(user)),
            catchError(error => of(new AddUserFail(error)))
          )
      )
    );
}
```

* The `@Effect` decorator annotates properties in the class that listen for actions.
* Filter for the desired action using the `ofType()` method.
* Invoke the `pipe()` method with operators to execute when the action of the specified type is dispatched.
* We use the `exhaustMap()` operator to switch streams to the `Observable` that is returned from our service's `save()` method, which we `map()` to a new `AddUserSuccess` action or the `AddUserFail` action when an error occurs.

## RxJS operators

Understanding how RxJS operators work and a familiarity with the available operators will enable you to compose reactive side effects using NgRx.

In general, RxJS operators enable you to:

* Create observables
* Filter observables
* Transform observables
* Combine observables
* Handle errors
* Perform mathematical operations
* Etc.

> Most operators operate on an Observable and return an Observable. This allows you to apply these operators one after the other, in a chain. Each operator in the chain modifies the Observable that results from the operation of the previous operator.

### `pipe()`

We can compose (or chain) operators together using the `pipe()` method.