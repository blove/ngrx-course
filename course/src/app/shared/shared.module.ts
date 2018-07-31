import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResortsMapComponent } from '@app/shared/components/resorts-map/resorts-map.component';
import { environment } from '@env/environment';
import { NguiMapModule } from '@ngui/map';

export const components = [ResortsMapComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    NguiMapModule.forRoot({
      apiUrl: `https://maps.google.com/maps/api/js?key=${
        environment.google.maps.apiKey
      }`
    }),
    CommonModule
  ]
})
export class SharedModule {}
