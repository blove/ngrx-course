import { Component, OnInit } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { resorts, State } from '@app/state';
import { SelectResort } from '@app/state/resort/resort.actions';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  resorts: Observable<Array<Resort>>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.resorts = this.store.pipe(select(resorts));
  }

  onDelete(resort: Resort) {
    // todo: delete resort entity in collection
  }

  onResortSelected(resort: Resort) {
    this.store.dispatch(new SelectResort(resort));
  }
}
