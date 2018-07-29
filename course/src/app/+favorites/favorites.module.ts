import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { FavoritesTableComponent } from './components/favorites-table/favorites-table.component';
import { FavoritesComponent } from './containers/favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [FavoritesComponent, FavoritesTableComponent]
})
export class FavoritesModule {}
