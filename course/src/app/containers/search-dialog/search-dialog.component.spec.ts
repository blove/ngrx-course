import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { generateResort } from '@app/models/resort.model';
import { ResortAutocompleteComponent } from '@app/shared/components/resort-autocomplete/resort-autocomplete.component';
import { reducers, State } from '@app/state/index';
import { SelectResort } from '@app/state/resort/resort.actions';
import { Store, StoreModule } from '@ngrx/store';
import { SearchDialogComponent } from './search-dialog.component';

describe('SearchDialogComponent', () => {
  let component: SearchDialogComponent;
  let fixture: ComponentFixture<SearchDialogComponent>;
  let store: Store<State>;

  const resort = generateResort();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortAutocompleteComponent, SearchDialogComponent],
      imports: [
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
    fixture = TestBed.createComponent(SearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onResortSelected', () => {
    it('should dispatch the SelectResort action', () => {
      const action = new SelectResort(resort);
      const spy = jest.spyOn(store, 'dispatch');

      component.onResortSelected(resort);

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
