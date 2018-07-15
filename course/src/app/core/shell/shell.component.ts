import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { isOpened, State } from '@app/state';
import { HideSidenav, ShowSidenav } from '@app/state/sidenav/sidenav.actions';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  opened: Observable<boolean>;

  constructor(
    private titleService: Title,
    private media: ObservableMedia,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.opened = this.store.pipe(select(isOpened));
  }

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  closeSidenav() {
    this.store.dispatch(new HideSidenav());
  }

  openSidenav() {
    this.store.dispatch(new ShowSidenav());
  }

  toggleSidenav() {
    this.opened.pipe(first()).subscribe(open => {
      if (open) {
        return this.closeSidenav();
      }
      this.openSidenav();
    });
  }
}
