import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app.routing.module';
import { DashboardComponent } from '@app/containers/dashboard/dashboard.component';
import { PageNotFoundComponent } from '@app/containers/page-not-found/page-not-found.component';
import { SearchDialogComponent } from '@app/containers/search-dialog/search-dialog.component';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { StateModule } from '@app/state/state.module';
import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SearchDialogComponent
  ],
  entryComponents: [SearchDialogComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.google.maps.apiKey
    }),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    SharedModule,
    StateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
