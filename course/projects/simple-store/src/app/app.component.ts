import { Component, OnInit } from '@angular/core';
import { store } from './store';
import { HideSidebar, LoadResorts, ShowSidebar } from './store/actions';
import { Resort } from './store/models';
import { initialSidebarState } from './store/reducers';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resorts: Resort[];
  sidebarHidden = initialSidebarState.hidden;
  store: Store;

  ngOnInit() {
    this.store = store;
    this.store.dispatch(new LoadResorts());
    this.store.subscribe(state => {
      this.resorts = state.resort.resorts;
      this.sidebarHidden = state.sidebar.hidden;
      console.log(state);
    });
  }

  hideSidebar() {
    this.store.dispatch(new HideSidebar());
  }

  identifyResort(resort: Resort) {
    return resort.id;
  }

  showSidebar() {
    this.store.dispatch(new ShowSidebar());
  }
}
