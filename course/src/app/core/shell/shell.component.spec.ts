import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchDialogComponent } from '@app/containers/search-dialog/search-dialog.component';
import { CoreModule } from '@app/core/core.module';
import { ShellComponent } from '@app/core/shell/shell.component';
import { reducers, State } from '@app/state';
import { OpenDialog } from '@app/state/dialog/dialog.actions';
import { HideSidenav, ShowSidenav } from '@app/state/sidenav/sidenav.actions';
import { Store, StoreModule } from '@ngrx/store';
import { cold } from 'jest-marbles';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        CoreModule,
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should declare the opened observable property', () => {
      const opened = false;
      const select = cold('-a', { a: opened });
      const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.opened).toBeObservable(select);

      component.opened.subscribe(value => {
        expect(value).toBe(opened);
      });
    });
  });

  describe('closeSidenav', () => {
    it('should dispatch the HideSidenav action', () => {
      const action = new HideSidenav();
      const spy = jest.spyOn(store, 'dispatch');

      component.closeSidenav();

      expect(spy).toHaveBeenCalledWith(action);
    });
  });

  describe('openDialog', () => {
    it('should dispatch the OpenDialog action', () => {
      const action = new OpenDialog(SearchDialogComponent, {
        width: '320px'
      });
      const spy = jest.spyOn(store, 'dispatch');

      const debugElement = fixture.debugElement.query(By.css('.search'));
      debugElement.triggerEventHandler('click', null);

      expect(spy).toHaveBeenCalledWith(action);
    });
  });

  describe('openSidenav', () => {
    it('should dispatch the ShowSidenav action', () => {
      const action = new ShowSidenav();
      const spy = jest.spyOn(store, 'dispatch');

      component.openSidenav();

      expect(spy).toHaveBeenCalledWith(action);
    });
  });

  describe('toggleSidenav', () => {
    it('should dispatch the ShowSidenav action first', () => {
      const action = new ShowSidenav();
      const spy = jest.spyOn(store, 'dispatch');

      const debugElement = fixture.debugElement.query(By.css('button'));
      debugElement.triggerEventHandler('click', null);

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch the HideSidenav action second', () => {
      const action = new HideSidenav();
      const spy = jest.spyOn(store, 'dispatch');

      const debugElement = fixture.debugElement.query(By.css('button'));
      debugElement.triggerEventHandler('click', null);
      debugElement.triggerEventHandler('click', null);

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
