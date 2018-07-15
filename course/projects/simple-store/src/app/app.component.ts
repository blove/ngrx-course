import { Component, OnInit } from "@angular/core";

import { LoadResorts, HideSidebar, ShowSidebar } from "./store/actions";
import { Store } from "./store/store";
import { store } from "./store";
import { initialSidebarState } from "./store/reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  sidebarHidden = initialSidebarState.hidden;
  store: Store;

  ngOnInit() {
    this.store = store;
    this.store.dispatch(new LoadResorts());
    this.store.subscribe(state => {
      this.sidebarHidden = state.sidebar.hidden;
      console.log(state);
    });
  }

  hideSidebar() {
    this.store.dispatch(new HideSidebar());
  }

  showSidebar() {
    this.store.dispatch(new ShowSidebar());
  }
}
