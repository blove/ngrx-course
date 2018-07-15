import { Component, OnInit } from '@angular/core';
import { store } from './store';
import { HideSidenav, LoadResorts, ShowSidenav } from './store/actions';
import { Resort } from './store/models';
import { initialSidenavState } from './store/reducers';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resorts: Resort[];
  sidenavHidden = initialSidenavState.hidden;
  store: Store;

  ngOnInit() {
    this.store = store;
    this.store.dispatch(new LoadResorts());
    this.store.subscribe(state => {
      this.resorts = state.resort.resorts;
      this.sidenavHidden = state.sidenav.hidden;
      console.log(state);
    });
  }

  hideSidenav() {
    this.store.dispatch(new HideSidenav());
  }

  identifyResort(resort: Resort) {
    return resort.id;
  }

  showSidenav() {
    this.store.dispatch(new ShowSidenav());
  }
}
