import { Component, OnInit } from "@angular/core";

import { LoadResorts } from "./store/actions";
import { Store } from "./store/store";
import { store } from "./store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  store: Store;

  ngOnInit() {
    this.store = store;
    const action = new LoadResorts();
    console.log(action);
    this.store.dispatch(action);
  }
}
