import { Component, Input } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { State } from '@app/state';
import { SetMapZoom } from '@app/state/map/map.actions';
import { Store } from '@ngrx/store';

interface Marker {
  lat: number;
  lng: number;
  title: string;
}

@Component({
  selector: 'app-resorts-map',
  templateUrl: './resorts-map.component.html',
  styleUrls: ['./resorts-map.component.scss']
})
export class ResortsMapComponent {
  @Input() height: number;
  @Input() resorts: Resort[];
  @Input() selectedResort: Resort;
  @Input() zoom: number;

  constructor(private store: Store<State>) {}

  lat = 39.8283;
  lng = -98.5795;
  markers: Marker[] = [];

  onZoomChange(event: number) {
    this.store.dispatch(new SetMapZoom(event));
  }
}
