import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Resort } from '@app/models/resort.model';
import { Observable, Subject } from 'rxjs';

@Component({
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnDestroy, OnInit {
  resorts: Observable<Resort[]>;

  searchFormControl = new FormControl();

  private unsubscribe = new Subject<void>();

  // todo: inject the singleton `Store` instance
  constructor() {}

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    // todo: declare the resorts property using a selector
    // todo: dispatch the SearchResorts action when the searchFormControl value changes
  }

  displayResort(resort?: Resort): string | undefined {
    return resort ? resort.name : undefined;
  }

  resortSelected(event: MatAutocompleteSelectedEvent) {
    const resort: Resort = event.option.value;
    // todo: dispatch the SelectResort action
  }
}
