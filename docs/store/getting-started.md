# Getting Started

To begin, checkout the *02-store* branch:

```bash
git checkout 02-store
```

If you have any pending changes simply reset:

```bash
git reset --hard
```

## Install

Install the necessary NgRx libraries:

```bash
npm install @ngrx/{schematics,store,store-devtools}
yarn add @ngrx/{schematics,store,store-devtools}
```

## Configure Schematics

Update the Angular CLI project to set the NgRx schematics as the default:

```bash
ng config cli.defaultCollection @ngrx/schematics
```

## Redux Devtools

Using the NgRx *store-devtools* library we can use the Redux Devtools to:

* view the actions being dispatched,
* have insight into the state tree for each given action,
* scrub through the timeline of actions that have been dispatched, and
* dispatch an action we are debugging.

Install the Redux Devtools:

* [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)

## Serve the Application

Serve the application via either command:

```bash
npm start
yarn start
```

This will build and start a live reload server available at: [http://localhost:4200](https://localhost:4200).

This also starts a simple json-server with a RESTful API on port 3000.

If you experience a port conflict ensure that you do not have any other Angular CLI projects running.

## Google Maps API Key

In order to display an embedded Google Map using the JavaScript library you must [get an API key](https://developers.google.com/maps/documentation/javascript/get-api-key):

1. Log into the [Google Cloud Console](https://console.developers.google.com/apis)
2. You may need to accept the Terms of Service if this is your first time using the Google Cloud Platform.
3. Create a new project named 'ngrx-course'
4. View all of the APIs
5. Search for the 'maps javascript' API
6. Choose the Maps JavaScript API
7. Enable the Maps JavaScript API
8. Go to the *Credentials* tab and choose *Create credentials* > *API key*.
9. Copy the API key.

### Step-by-step screen shots:

**Terms of Service**

![Terms of Service](./images/01-tos.png)

**Create project**

![Create project](./images/02-create-project.png)

**Create API project**

![Create API project](./images/03-create-api-project.png)

**New project**

![New project](./images/04-new-project.png)

**View all APIs**

![View all APIs](./images/05-view-all-apis.png)

**Search for Maps JavaScript API**

![Maps JavaScript API](./images/06-maps-javascript-api.png)

**Enable Maps JavaScript API**

![Enable API](./images/07-enable-api.png)

**Choose Credentials and Create credentials**

![API credentials](./images/08-api-credentials.png)

**Create an API key**

![API key](./images/09-api-key.png)

**Copy API key**

![Copy API key](./images/10-copy-api-key.png)

## Angular Google Maps

We'll be using the [Angular Google Maps](https://angular-maps.com/) library to easily display a Google Map:

```bash
npm install @agm/core
yarn add @agm/core
```

Update both the **src/environments/environment.ts** and **src/environments/environments.prod.ts** files with your API key:

```javascript
export const environment = {
  google: {
    maps: {
      apiKey: 'API_KEY'
    }
  }
}
```

### Update `AppModule`

Import the `AgmCoreModule` in the `AppModule`:

```javascript
@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.google.maps.apiKey
    })
  ]
})
export class AppModule {}

```