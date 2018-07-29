import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Resort } from '@app/models/resort.model';

@Component({
  selector: 'app-favorites-table',
  templateUrl: './favorites-table.component.html',
  styleUrls: ['./favorites-table.component.scss']
})
export class FavoritesTableComponent implements OnChanges, OnInit {
  columnsToDisplay = ['name', 'actions'];
  dataSource = new MatTableDataSource();
  @Output() delete = new EventEmitter<Resort>();
  @Input() resorts: Resort[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.resorts && simpleChanges.resorts.currentValue) {
      this.dataSource.data = simpleChanges.resorts.currentValue;
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
