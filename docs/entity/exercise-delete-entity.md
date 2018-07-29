# Exercise: Delete Entity

Use the @ngrx/entity library to delete an entity from the resort collection.

## Steps

1. Add a new `DeleteResort` action in **src/app/state/resort/resort.actions.ts**
2. Update the `reducer()` in **src/app/state/resort/resort.reducer.ts** to use the adapter's `removeOne()` method for removing the resort.
3. Update the `FavoritesComponent` in **src/app/+favorites/containers/favorites/favorites.component.ts** to dispatch the `DeleteResort` action in the `onDelete()` method