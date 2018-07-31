import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { NguiMapComponent } from '@ngui/map';

interface Marker {
  position: number[];
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

  bounds: google.maps.LatLngBounds;
  map: google.maps.Map;
  markers: Marker[] = [];
  @ViewChild(NguiMapComponent) nguiMapComponent: NguiMapComponent;
  title: string;

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.resorts && simpleChanges.resorts.currentValue) {
      this.markers = this.resorts.map(resort => ({
        position: [Number(resort.lat), Number(resort.lng)],
        title: resort.name
      }));
    }
  }

  onMapClick() {
    this.nguiMapComponent.closeInfoWindow('infoWindow');
  }

  onMapReady(map: google.maps.Map) {
    this.map = map;
    this.bounds = new google.maps.LatLngBounds();
  }

  onMarkerClick(event) {
    const marker = event.target;
    this.title = event.target.getTitle();
    this.nguiMapComponent.openInfoWindow('infoWindow', marker);
  }

  onMarkerInit(marker) {
    this.bounds.extend(marker.getPosition());
    this.map.setCenter(this.bounds.getCenter());
    if (this.resorts.length === 1) {
      this.map.setZoom(this.zoom);
    } else {
      this.map.fitBounds(this.bounds);
    }
  }
}
