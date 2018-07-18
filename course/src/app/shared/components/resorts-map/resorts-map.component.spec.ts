import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResortsMapComponent } from './resorts-map.component';

describe('ResortsMapComponent', () => {
  let component: ResortsMapComponent;
  let fixture: ComponentFixture<ResortsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResortsMapComponent]
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
