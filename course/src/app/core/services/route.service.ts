import { Route as ngRoute, Routes } from '@angular/router';
import { ShellComponent } from '@app/core/shell/shell.component';

export class Route {
  static withShell(routes: Routes): ngRoute {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      //canActivate: [AuthenticationGuard],
      data: { reuse: true }
    };
  }
}
