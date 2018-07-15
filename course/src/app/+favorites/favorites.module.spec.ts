import { FavoritesModule } from './favorites.module';

describe('FavoritesModule', () => {
  let favoritesModule: FavoritesModule;

  beforeEach(() => {
    favoritesModule = new FavoritesModule();
  });

  it('should create an instance', () => {
    expect(FavoritesModule).toBeTruthy();
  });
});
