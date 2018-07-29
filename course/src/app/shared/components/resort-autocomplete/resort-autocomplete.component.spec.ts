import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { ResortAutocompleteComponent } from './resort-autocomplete.component';

describe('ResortAutocompleteComponent', () => {
  let component: ResortAutocompleteComponent;
  let fixture: ComponentFixture<ResortAutocompleteComponent>;
  // todo: define store object

  // todo: generate fake resort

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortAutocompleteComponent],
      imports: [
        CommonModule,
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
    fixture = TestBed.createComponent(ResortAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // todo: declare store object
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // todo: test ngOnInit
});
