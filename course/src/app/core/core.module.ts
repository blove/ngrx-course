import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { ShellComponent } from '@app/core/shell/shell.component';
import { MaterialModule } from '@app/material.module';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
  declarations: [ShellComponent],
  providers: [AuthenticationService]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
