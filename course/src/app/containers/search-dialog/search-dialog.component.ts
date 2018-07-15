import { Component } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { State } from '@app/state';
import { SelectResort } from '@app/state/resort/resort.actions';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent {
  constructor(private store: Store<State>) {}

  onResortSelected(resort: Resort) {
    this.store.dispatch(new SelectResort(resort));
  }
}
