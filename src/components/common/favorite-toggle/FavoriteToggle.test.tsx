
import RootStore from '@/stores/RootStore';
import { rootStore } from '@/pages/_app';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteToggle from './FavoriteToggle';

jest.mock('@/pages/_app', () => ({
  rootStore: new RootStore
}));

describe('FavoriteToggle', () => {
  describe('on render', () => {
    it('renders a button', () => {
      render(<FavoriteToggle placeId={1} />);
      expect(screen.getByRole('button')).toBeDefined();
    });
  });
  describe('on click', () => {
    it('if the provided placeId is in the favoriteStore, removes it from the favoritesStore', () => {
      const favoritesStore = rootStore.domainStore.favorites;
      const placeIdToRemove = 1;
      favoritesStore.addPlace(placeIdToRemove);
      render(<FavoriteToggle placeId={1} />);
      const favoriteToggleEl = screen.getByRole('button');
      userEvent.click(favoriteToggleEl);
      expect(favoritesStore.hasPlace(placeIdToRemove)).toBe(false);
    });
    it('if the provided placeId is not in the favoriteStore, adds it to the favoritesStore', () => {
      const favoritesStore = rootStore.domainStore.favorites;
      const placeIdToAdd = 1;
      favoritesStore.removePlace(placeIdToAdd);
      render(<FavoriteToggle placeId={1} />);
      const favoriteToggleEl = screen.getByRole('button');
      userEvent.click(favoriteToggleEl);
      expect(favoritesStore.hasPlace(placeIdToAdd)).toBe(true);
    });
  });
});