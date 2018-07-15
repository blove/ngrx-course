import { Component, OnInit } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { mapZoom, State } from '@app/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mapZoom: Observable<number>;
  resorts: Observable<Array<Resort>>;
  selectedResort: Observable<Resort>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.mapZoom = this.store.select(mapZoom);
    // todo: select the resorts
    // todo: select the selected resort
  }
}
