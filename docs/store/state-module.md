# State Module

First, create a new state directory and module:

```bash
mkdir src/app/state
touch src/app/state/state.module.ts
```

Open the **src/app/state/state.module.ts** file and stub out a module:

```javascript
import { NgModule } from '@angular/core';

@NgModule({})
export class StateModule {}
```

## Generate Store

Next, we'll use the NgRx schematics to generate the store:

```bash
ng generate @ngrx/schematics:store State --root --module state/state.module.ts --statePath state
```

**Pro Tip**: If you've set the NgRx schematics as the default in **angular.json** then you can omit the '@ngrx/schematics:store' portion.

* When using the *root* option the schematics will register the `StoreModule` using the `forRoot()` static method.
* The *module* option specifies the module that we want to update. This is the module we just created.
* The *statePath* option specifies the directory to use when generating the state files.

If successful, you should see the following result after executing the command:

```
CREATE src/app/state/index.ts (359 bytes)
UPDATE src/app/state/state.module.ts (433 bytes)
```

## Update `AppModule`

Finally, update the `AppModule` in order to import the `StateModule` using the `forRoot()` static method we defined:

```javascript
import { metaReducers, reducers } from '@app/state';
import { environment } from '@env/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Serve

Serve the application and open the Redux Devtools:

```
npm start
yarn start
```

You should see the `@ngrx/store/init` action dispatched.

If the Devtools indicate 'No store found' try reloading the browser.

## Optionally Update `StateModule`

Update the `StateModule` to avoid it from being imported into multiple modules:

```javascript
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { metaReducers, reducers } from '@app/state';
import { environment } from '@env/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import StateModule in the AppModule only.`
      );
    }
  }
}
```