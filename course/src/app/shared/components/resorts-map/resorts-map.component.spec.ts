import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ResortsMapComponent } from './resorts-map.component';

describe('ResortsMapComponent', () => {
  let component: ResortsMapComponent;
  let fixture: ComponentFixture<ResortsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortsMapComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn()
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
