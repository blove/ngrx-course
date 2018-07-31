import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from '@app/containers/dashboard/dashboard.component';
import { SharedModule } from '@app/shared/shared.module';
import { reducers } from '@app/state';
import { StoreModule } from '@ngrx/store';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [SharedModule, StoreModule.forRoot(reducers)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
