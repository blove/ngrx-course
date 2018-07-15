import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ResortsMapComponent implements OnChanges {
  @Input() height: number;
  @Input() resorts: Resort[];
  @Input() selectedResort: Resort;
  @Input() zoom: number;

  lat = 39.8283;
  lng = -98.5795;
  markers: Marker[] = [];

  constructor(private store: Store<State>) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (
      simpleChanges.selectedResort &&
      simpleChanges.selectedResort.currentValue
    ) {
      this.lat = Number(this.selectedResort.lat);
      this.lng = Number(this.selectedResort.lng);
    }
    if (simpleChanges.resorts && simpleChanges.resorts.currentValue) {
      this.markers = this.resorts.map(resort => ({
        lat: Number(resort.lat),
        lng: Number(resort.lng),
        title: resort.name
      }));
    }
  }

  onZoomChange(event: number) {
    this.store.dispatch(new SetMapZoom(event));
  }
}
