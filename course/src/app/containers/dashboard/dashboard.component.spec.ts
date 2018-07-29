import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from '@app/containers/dashboard/dashboard.component';
import { SharedModule } from '@app/shared/shared.module';
import { NguiMapModule } from '@ngui/map';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  // todo: define store variable

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        NguiMapModule,
        // todo: import StoreModule
        SharedModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // todo: get store instance
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // todo: test ngOnInit
});
