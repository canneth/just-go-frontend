
import { makeAutoObservable } from 'mobx';
import FavoritesStore from './domain-stores/FavoritesStore';

export default class RootStore {
  domainStore = {
    favorites: new FavoritesStore
  }
  uiStore = {}

  constructor() {
    makeAutoObservable(this);
  }

  get domain() { return this.domainStore; }
  get ui() { return this.uiStore; }

}

