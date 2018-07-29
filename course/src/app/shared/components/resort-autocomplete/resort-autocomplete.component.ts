import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Resort } from '@app/models/resort.model';
import { searchResults, State } from '@app/state';
import { SearchResorts } from '@app/state/resort/resort.actions';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-resort-autocomplete',
  templateUrl: './resort-autocomplete.component.html',
  styleUrls: ['./resort-autocomplete.component.scss']
})
export class ResortAutocompleteComponent implements OnDestroy, OnInit {
  resorts: Observable<Resort[]>;
  searchFormControl = new FormControl();
  @Output() selected = new EventEmitter<Resort>();

  private unsubscribe = new Subject<void>();

  constructor(private store: Store<State>) {}

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    this.resorts = this.store.pipe(
      select(searchResults),
      filter(results => results.length > 0)
    );

    this.searchFormControl.valueChanges
      .pipe(
        filter(q => q.length > 1),
        debounceTime(500),
        takeUntil(this.unsubscribe)
      )
      .subscribe(q => this.store.dispatch(new SearchResorts(q)));
  }

  display(resort?: Resort): string | undefined {
    return resort ? resort.name : undefined;
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const resort: Resort = event.option.value;
    this.selected.emit(resort);
  }
}
