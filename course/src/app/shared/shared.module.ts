import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { ResortAutocompleteComponent } from '@app/shared/components/resort-autocomplete/resort-autocomplete.component';
import { ResortsMapComponent } from '@app/shared/components/resorts-map/resorts-map.component';
import { environment } from '@env/environment';
import { NguiMapModule } from '@ngui/map';

export const components = [ResortAutocompleteComponent, ResortsMapComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NguiMapModule.forRoot({
      apiUrl: `https://maps.google.com/maps/api/js?key=${
        environment.google.maps.apiKey
      }`
    }),
    ReactiveFormsModule
  ]
})
export class SharedModule {}
