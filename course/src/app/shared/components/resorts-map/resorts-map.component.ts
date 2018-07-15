import { Component, Input } from '@angular/core';
import { Resort } from '@app/models/resort.model';

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

  // todo: inject store singleton instance
  constructor() {}

  lat = 39.8283;
  lng = -98.5795;
  markers: Marker[] = [];
  // todo: update zoom property to an input binding
  zoom = 5;

  onZoomChange(event: number) {
    // todo: dispatch the SetMapZoom action
  }
}
