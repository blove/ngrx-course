import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

import { ResortService } from './../../core/services/resort.service';
import { startWith, map } from '../../../../node_modules/rxjs/operators';
import { Resort } from '@app/models/resort.model';

@Component({
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {
  resorts: Resort[];
  filteredResorts: Observable<Resort[]>;
  searchInput = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    private resortService: ResortService
  ) {}

  ngOnInit() {
    this.getResorts();
  }

  getResorts() {
    this.resortService.getResorts().subscribe(resorts => {
      if (resorts) {
        this.watchValueChanges();
        return (this.resorts = resorts);
      }
    });
  }

  watchValueChanges() {
    this.filteredResorts = this.searchInput.valueChanges.pipe(
      startWith(''),
      map(
        resort => (resort ? this.filterResorts(resort) : this.resorts.slice())
      )
    );
  }

  filterResorts(value: string): Resort[] {
    const filterValue = value.toLowerCase();

    return this.resorts.filter(
      resort => resort.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
