import { inject, TestBed } from '@angular/core/testing';
import { AuthenticationGuard } from '@app/core/authentication/authentication.guard';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { MockAuthenticationService } from '@app/core/authentication/authentication.service.mock';
import { Route } from '@app/core/services/route.service';
import { ShellComponent } from '@app/core/shell/shell.component';

describe('Route', () => {
  let route: Route;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        Route
      ]
    });
  });

  beforeEach(inject([Route], (_route: Route) => {
    route = _route;
  }));

  describe('withShell', () => {
    it('should create routes as children of shell', () => {
      const testRoutes = [{ path: 'test' }];

      const result = Route.withShell(testRoutes);

      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(ShellComponent);
    });
  });
});
