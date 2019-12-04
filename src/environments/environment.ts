// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  google: {
    maps: {
      apiKey: 'AIzaSyBDwbyfhmy6ywu_C-oY7m7eHosBCLdiAK8'
    },
    firebase: {
      apiKey: 'AIzaSyAkGfqfWiHAqNKOhRTll-Rhw1Qw7SZN1ro',
      authDomain: 'ngrx-course-210605.firebaseapp.com',
      databaseURL: 'https://ngrx-course-210605.firebaseio.com',
      projectId: 'ngrx-course-210605',
      storageBucket: 'ngrx-course-210605.appspot.com',
      messagingSenderId: '679702729839'
    }
  },
  production: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
