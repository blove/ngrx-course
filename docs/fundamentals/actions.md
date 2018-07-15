# NgRx Actions

* An object that specifies the `type` of action being dispatched
* Optionally contains data or a payload

## Example Action

```
{
  type: '[sidebar] Show'
}
```

## Example Action with Payload

```
{
  type: '[user] Add user',
  user: Partial<User>
}
```

## `Action` Interface

While we can create simple object actions, using TypeScript we can create classes that implement the `Actions` interface.

```
export enum UserActionTypes {
  AddUser: '[user] Add user',
  AddUserFail: '[user] Add user fail',
  AddUserSuccess: '[user] Add user success'
}

export class AddUserAction implements Action {
  type: UserActionTypes.AddUser;

  constructor(public user: Partial<User>) { }
}

export class AddUserFailAction implements Action {
  type: UserActionTypes.AddUserFail;

  constructor(public error: Error) { }
}

export class AddUserSuccess implements Action {
  type: UserActionTypes.AddUserSuccess;

  constructor(public user: User) { }
}
```