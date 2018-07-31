import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { reducers } from '@app/state';
import { StoreModule } from '@ngrx/store';
import { NguiMapModule } from '@ngui/map';
import { ResortsMapComponent } from './resorts-map.component';

describe('ResortsMapComponent', () => {
  let component: ResortsMapComponent;
  let fixture: ComponentFixture<ResortsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortsMapComponent],
      imports: [NguiMapModule, StoreModule.forRoot(reducers)]
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
