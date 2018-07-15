# What Does NgRx Solve?

Client applications can be complex.
Whether deployed within the context of a browser or a mobile device client applications built with Angular often start simple and grow in complexity in order to deliver the desired functionality with a practical and valuable user experience.

## The Problem

The problem is not inherently the complexity of client applications, but the result of the complexity:

* Is the navigation open or closed?
* Do we show or hide a loading indicator?
* Is a form valid or invalid?
* What filters were used in a search?
* Is the user logged in?
* Etc.

Keeping track of the state of our application can be difficult.

## Singletons

One approach to keeping track of all of this "state" is to store the information in a singleton:

*src/app/search.service.ts*

```javascript
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  filters: Filter[];
  query: string;

  search(): SearchResult {
    // returns the result of the search using the user query and filters
  }
}
```

*src/app/app.component.ts*

```javascript
@Component({
  template: `
    <app-search [filters]="filters" [query]="query" (search)="onSearch($event)"></app-search>
  `
})
export class AppComponent {

  constructor(private searchService: SearchService) { }

  onSearch(data: SearchData) {
    // store filters and query
    this.searchService.filters = data.filters;
    this.searchService.query = data.query;

    // perform search
    const result = this.searchService.search();
  }
}
```

In the `AppComponent` we use the `SearchService` to store both the currently selected filters and the user's search query and to perform the `search()`.

## Keeping It In Sync

Keeping the various states in our application becomes difficult to manage via singletons or services:

* Persistance
* Local Storage
* Routing
* Form Data
* UI State
* Pagination

## Immutability

* Massive performance gain via `ChangeDetectionStrategy.OnPush` 
* Guaranteed accuracy
* Must be enforced