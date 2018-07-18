import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resorts-map',
  templateUrl: './resorts-map.component.html',
  styleUrls: ['./resorts-map.component.css']
})
export class ResortsMapComponent implements OnInit {
  @Input() height: number;

  lat = 39.8283;
  lng = -98.5795;
  zoom = 5;

  constructor() {}

  ngOnInit() {}
}
