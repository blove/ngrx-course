import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { generateResort } from '@app/models/resort.model';
import { reducers, State } from '@app/state/index';
import { SearchResorts } from '@app/state/resort/resort.actions';
import { Store, StoreModule } from '@ngrx/store';
import { cold } from 'jest-marbles';
import { ResortAutocompleteComponent } from './resort-autocomplete.component';

describe('ResortAutocompleteComponent', () => {
  let component: ResortAutocompleteComponent;
  let fixture: ComponentFixture<ResortAutocompleteComponent>;
  let store: Store<State>;

  const resort = generateResort();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortAutocompleteComponent],
      imports: [
        CommonModule,
        FormsModule,
        HttpClientTestingModule,
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should declare the resorts observable property', () => {
      const resorts = [resort];
      const select = cold('-a', { a: resorts });
      const spy = jest.spyOn(store, 'pipe').mockReturnValue(select);

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.resorts).toBeObservable(select);

      component.resorts.subscribe(value => {
        expect(value).toBe(resorts);
      });
    });

    it(
      'should dispatch the SearchResults action when the search form control value changes',
      fakeAsync(() => {
        const q = 'Testing';
        const action = new SearchResorts(q);
        const spy = jest.spyOn(store, 'dispatch');

        component.searchFormControl.setValue(q);
        tick(500);

        expect(spy).toHaveBeenCalledWith(action);
      })
    );
  });
});
