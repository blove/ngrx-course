import { Route, Routes } from '@angular/router';
import { ShellComponent } from '@app/core/shell/shell.component';

export class RouteService {
  static withShell(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      data: { reuse: true }
    };
  }
}
