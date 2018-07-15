import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  opened: Observable<boolean>;

  constructor(
    private titleService: Title,
    private media: ObservableMedia // todo: inject the Store singleton instance
  ) {}

  ngOnInit() {
    // todo: select the opened boolean value from the state object using a selector
  }

  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  closeSidenav() {
    // todo: dispatch action to hide sidenav
  }

  openSidenav() {
    // todo: dispatch action to show sidenav
  }

  toggleSidenav() {
    // todo: invoke closeSidenav or openSidenav based on the current value of the opened observable
  }
}
