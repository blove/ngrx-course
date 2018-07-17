# NgRx `Store`

* `dispatch()` actions
* An `Observable` of state
* An `Observer` of actions

## Dispatching Actions

```javascript
export class AddUserComponent {

  constructor(private store: Store<AppState>) { }

  onSubmit(user: User) {
    this.store.dispatch(new AddUserAction(user));
  }
}
```

* Inject `Store`
* Invoke `dispatch()` method
* New up the `AddUserAction` class specifying the `user`
* No HTTP service
* No state changes

## Observing State

```javascript
export class UserListComponent implements OnInit {

  users$: Observable<Array<User>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(allUsers));
  }
}
```

* `users$` is an `Observable` that receives notifications
* The notification type is an array of `User` objects
* Inject `Store`
* Invoke the `pipe()` method on the `store`
* Use the `select()` operator specifying the `allUsers` selector

## What's a selector?

> Kind of like a stored procedure

* Pure function
* Enables us to obtain a specific slice of data in the state tree.
* Memoized for performance

## What is memoization?

> An optimization technique to cache expensive function calls

* Tracks arguments
* Stores output
* Previous result is returned when argument match
