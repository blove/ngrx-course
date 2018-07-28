import { inject, TestBed } from '@angular/core/testing';
import { RouteService } from '@app/core/services/route.service';
import { ShellComponent } from '@app/core/shell/shell.component';

describe('Route', () => {
  let route: RouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteService]
    });
  });

  beforeEach(inject([RouteService], (_route: RouteService) => {
    route = _route;
  }));

  describe('withShell', () => {
    it('should create routes as children of shell', () => {
      const testRoutes = [{ path: 'test' }];

      const result = RouteService.withShell(testRoutes);

      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(ShellComponent);
    });
  });
});
