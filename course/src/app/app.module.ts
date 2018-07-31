import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app.routing.module';
import { DashboardComponent } from '@app/containers/dashboard/dashboard.component';
import { PageNotFoundComponent } from '@app/containers/page-not-found/page-not-found.component';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { StateModule } from '@app/state/state.module';
import { environment } from '@env/environment';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PageNotFoundComponent],
  imports: [
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
