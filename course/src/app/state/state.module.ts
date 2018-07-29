import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { metaReducers, reducers } from '@app/state';
import { DialogEffects } from '@app/state/dialog/dialog.effects';
import { ResortEffects } from '@app/state/resort/resort.effects';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([DialogEffects, ResortEffects]),
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
