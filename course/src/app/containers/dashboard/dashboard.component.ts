import { Component, OnInit } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { mapZoom, resorts, selectedResort, State } from '@app/state';
import { select, Store } from '@ngrx/store';
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
    this.mapZoom = this.store.pipe(select(mapZoom));
    this.resorts = this.store.pipe(select(resorts));
    this.selectedResort = this.store.pipe(select(selectedResort));
  }
}
