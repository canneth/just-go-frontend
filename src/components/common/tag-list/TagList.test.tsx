
import { render, screen } from '@testing-library/react';
import TagList from './TagList';

describe('TagList', () => {
  describe('on render', () => {
    it('renders a single (ordered) list', () => {
      render(<TagList tagList={[]} />);
      screen.getByRole('list');
    });
    it('if prop tagList is empty, renders 0 children', () => {
      render(<TagList tagList={[]} />);
      const tagListEl = screen.getByRole('list');
      expect(tagListEl.childElementCount).toBe(0);
    });
    it('if prop tagList has X elements, renders exactly X children', () => {
      render(<TagList tagList={['chill', 'dine', 'drink']} />);
      const tagListEl = screen.getByRole('list');
      expect(tagListEl.childElementCount).toBe(3);
    });
  });
});