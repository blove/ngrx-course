import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/core/core.module';
import { ShellComponent } from '@app/core/shell/shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;
  // todo: define store object

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        CoreModule
        // todo: import StoreModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // todo: declare store object
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // todo: test ngOninit

  // todo: test closeSidenav

  // todo: test openDialog

  // todo: test openSidenav

  // todo: test toggleSidenav
});
