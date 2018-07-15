import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResortsMapComponent } from '@app/shared/components/resorts-map/resorts-map.component';

export const components = [ResortsMapComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [AgmCoreModule, CommonModule]
})
export class SharedModule {}
