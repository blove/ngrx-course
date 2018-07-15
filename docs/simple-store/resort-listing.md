# Resort Listing

Let's update our application to list all of the ski resorts.

## Update `AppComponent`

Open **src/app/app.component.ts**.

First, create a new `resorts` property to contain the array of `Resort` objects that we'll obtain from the state object:

```javascript
resorts: Resort[];
```

Next, update the `ngOnInit` lifecycle method:

```javascript
ngOnInit() {
  this.store = store;
  this.store.dispatch(new LoadResorts());
  this.store.subscribe(state => {
    this.resorts = state.resort.resorts;
    this.sidebarHidden = state.sidebar.hidden;
    console.log(state);
  });
}
```

* First, `dispatch()` the `LoadResorts` action.
* Then, set the `resorts` property from the state object.

Finally, let's create an `identifyResort` method that can be used as the tracking function for the `NgForOf` directive:

```javascript
identifyResort(resort: Resort) {
  return resort.id;
}
```

## Update Template

Open **src/app/app.component.html** and add an unordered list to display the ski resorts with a link to their website:

```html
<ul *ngFor="let resort of this.resorts; trackBy: identifyResort">
  <li>
    <a [attr.href]="resort.url" target="_blank">{{resort.name}}</a>
  </li>
</ul>
```

## Serve

Go ahead and serve the project:

```bash
npm run start:simple-store
yarn run start:simple-store
```

Inspect the console for state changes as the resorts are loaded as well as inspect the GET network request to load the resorts from the REST API.