import { Component, OnInit } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // todo: define mapZoom property

  resorts: Observable<Array<Resort>>;
  selectedResort: Observable<Resort>;

  // inject the Store instance object
  constructor() {}

  ngOnInit() {
    // todo: set the mapZoom property using selector
  }
}
