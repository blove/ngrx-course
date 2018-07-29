# Story

We've been given a story to add a new feature to our application to allow the user to search for a ski resort.
* Given the user has opened the sidenav and clicked the search link
  * Then show a dialog with an autocomplete input
  * When the user enters at least one character and 500 milliseconds has passed since they stopped entering a query
    * Then search possible results using the API
    * And show the results below the input
    * When the user selects a resort
      * Then center the map on the location
      * And add a map marker at the location

We'll need to:

1. Create the necessary actions.
2. Create a reducer function to mutate the state.
3. Create an effect to perform the asynchronous HTTP request.
4. Handle any errors that occur if the HTTP requests fail or the API returns a 500 status code.
5. Dispatch the necessary actions and select from the state object.