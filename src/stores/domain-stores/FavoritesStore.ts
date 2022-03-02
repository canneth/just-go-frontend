
import PlaceData from '@/models/PlaceData';
import arrayFilterInPlace from '@/utils/arrayFilterInPlace';
import { makeAutoObservable } from 'mobx';

type FavoriteItem = PlaceData['osm_id'];

// Store
export default class FavoritesStore {
  favoritesList: Array<FavoriteItem> = [];

  constructor() {
    makeAutoObservable(this);
  }

  getFavorites() {
    return this.favoritesList;
  }
  setFavorites(newFavorites: Array<FavoriteItem>) {
    this.favoritesList = newFavorites;
  }
  hasPlace(place: FavoriteItem) {
    return this.favoritesList.includes(place);
  }
  addPlace(place: FavoriteItem) {
    if (this.hasPlace(place)) return;
    this.favoritesList.push(place);
  }
  removePlace(place: FavoriteItem) {
    arrayFilterInPlace(this.favoritesList, (x) => x !== place);
  }
  reset() {
    this.setFavorites([]);
  }
}

