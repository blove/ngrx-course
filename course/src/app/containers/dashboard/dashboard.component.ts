import { Component } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { State } from '@app/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  resorts: Observable<Array<Resort>>;
  selectedResort: Observable<Resort>;

  constructor(private store: Store<State>) {}
}
