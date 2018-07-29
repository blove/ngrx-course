import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { ResortAutocompleteComponent } from '@app/shared/components/resort-autocomplete/resort-autocomplete.component';
import { SearchDialogComponent } from './search-dialog.component';

describe('SearchDialogComponent', () => {
  let component: SearchDialogComponent;
  let fixture: ComponentFixture<SearchDialogComponent>;
  // todo: define store object

  // todo: generate fake resort

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortAutocompleteComponent, SearchDialogComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule
        // todo: import StoreModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // todo: declare store object
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // todo: test onResortSelected
});
