
import FavoritesStore from './FavoritesStore';

describe('FavoritesStore', () => {
  describe('each instance', () => {
    it('starts with an empty favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const favoritesList = favoritesStore.getFavorites();
      expect(favoritesList).toHaveLength(0);
    });
  });
  describe('getFavorites()', () => {
    it('returns an array representing the favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const favoritesList = favoritesStore.getFavorites();
      expect(favoritesList).toBeInstanceOf(Array);
    });
  });
  describe('setFavorites(newFavorites: Array<PlaceId>)', () => {
    it('sets internal favorites collection to newFavorites', () => {
      const favoritesStore = new FavoritesStore;
      expect(favoritesStore.getFavorites()).toHaveLength(0);
      const newFavoritesList = [1, 2, 3];
      favoritesStore.setFavorites(newFavoritesList);
      expect(favoritesStore.getFavorites()).toStrictEqual(newFavoritesList);
    });
  });
  describe('hasPlace(place: PlaceId)', () => {
    it('returns true if place is in the favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const favoriteToFind = 1;
      const favorites = [favoriteToFind, 2, 3];
      favoritesStore.setFavorites(favorites);
      expect(favoritesStore.hasPlace(favoriteToFind)).toBe(true);
    });
    it('returns false if place is not in the favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const favoriteToFind = 1;
      const favorites = [2, 3];
      favoritesStore.setFavorites(favorites);
      expect(favoritesStore.hasPlace(favoriteToFind)).toBe(false);
    });
    it('returns false if the favorites collection is empty', () => {
      const favoritesStore = new FavoritesStore;
      const favoriteToFind = 1;
      expect(favoritesStore.getFavorites()).toHaveLength(0);
      expect(favoritesStore.hasPlace(favoriteToFind)).toBe(false);
    });
  });
  describe('addPlace(place: PlaceId)', () => {
    it('adds place to the favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const newFavorite = 1;
      favoritesStore.addPlace(newFavorite);
    });
    it('adding duplicates does not change the favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const newFavorite = 1;
      const existingFavoritesList = [newFavorite, 2, 3];
      favoritesStore.setFavorites(existingFavoritesList);
      favoritesStore.addPlace(newFavorite);
      const newFavoritesList = favoritesStore.getFavorites();
      expect(newFavoritesList).toStrictEqual(existingFavoritesList);
    });
  });
  describe('removePlace(place: PlaceId)', () => {
    it('does nothing if the place does not exist in favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const existingFavoritesList = favoritesStore.getFavorites();
      favoritesStore.removePlace(1);
      const newFavoritesList = favoritesStore.getFavorites();
      expect(newFavoritesList).toStrictEqual(existingFavoritesList);
    });
    it('removes a place from the favorites collection', () => {
      const favoritesStore = new FavoritesStore;
      const placeToRemove = 1;
      const existingFavoritesList = [placeToRemove, 2, 3];
      favoritesStore.setFavorites(existingFavoritesList);
      favoritesStore.removePlace(placeToRemove);
      const newFavoritesList = favoritesStore.getFavorites();
      const expectedNewFavoritesList = [2, 3];
      expect(newFavoritesList).toStrictEqual(expectedNewFavoritesList);
    });
  });
});