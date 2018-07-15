import { Component, OnInit } from '@angular/core';
import { Resort } from './store/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resorts: Resort[] = [];

  // todo: declare sidenavHidden boolean property

  // todo: define store property

  ngOnInit() {
    // todo: obtain reference to store instance
    // todo: dispatch action to load resorts
    // todo: subscribe to state changes and update resorts and sidenavHidden properties
    // hint: you may want to log out the state in the subscribe() next notification callback
  }

  hideSidenav() {
    // todo: dispatch action to hide sidenav
  }

  identifyResort(resort: Resort) {
    return resort.id;
  }

  showSidenav() {
    // todo: dispatch action to show sidenav
  }
}
