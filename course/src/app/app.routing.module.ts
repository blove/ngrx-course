import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/containers/dashboard/dashboard.component';
import { PageNotFoundComponent } from '@app/containers/page-not-found/page-not-found.component';
import { Route } from '@app/core/services/route.service';

const routes: Routes = [
  Route.withShell([
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]),
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
