import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { reducers } from '@app/state';
import { StoreModule } from '@ngrx/store';
import { FavoritesTableComponent } from './../../components/favorites-table/favorites-table.component';
import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesComponent, FavoritesTableComponent],
      imports: [
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
