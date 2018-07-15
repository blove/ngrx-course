import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from '@app/containers/dashboard/dashboard.component';
import { generateResort } from '@app/models/resort.model';
import { SharedModule } from '@app/shared/shared.module';
import { reducers, State } from '@app/state';
import { Store, StoreModule } from '@ngrx/store';
import { NguiMapModule } from '@ngui/map';
import { cold } from 'jest-marbles';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [NguiMapModule, StoreModule.forRoot(reducers), SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should declare the mapZoom observable property', () => {
      const zoom = 5;
      const select = cold('-a', { a: zoom });
      const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.mapZoom).toBeObservable(select);

      component.mapZoom.subscribe(value => {
        expect(value).toBe(zoom);
      });
    });

    it('should declare the resorts observable property', () => {
      const resorts = [generateResort()];
      const select = cold('-a', { a: resorts });
      const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.resorts).toBeObservable(select);

      component.resorts.subscribe(value => {
        expect(value).toBe(resorts);
      });
    });

    it('should declare the selectedResort observable property', () => {
      const resort = generateResort();
      const select = cold('-a', { a: resort });
      const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.selectedResort).toBeObservable(select);

      component.selectedResort.subscribe(value => {
        expect(value).toBe(resort);
      });
    });
  });
});
