
import PlaceData from '@/models/PlaceData';
import { makeAutoObservable } from 'mobx';

type FavoriteItem = PlaceData['osm_id'];

// Store
export default class FavoritesStore {
  favoritesList: Set<FavoriteItem> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  getFavorites() {
    return this.favoritesList;
  }
  setFavorites(newFavorites: Array<FavoriteItem>) {
    this.favoritesList = new Set(newFavorites);
  }
  hasPlace(place: FavoriteItem) {
    return this.favoritesList.has(place);
  }
  addPlace(place: FavoriteItem) {
    this.favoritesList.add(place);
  }
  removePlace(place: FavoriteItem) {
    this.favoritesList.delete(place);
  }
}

