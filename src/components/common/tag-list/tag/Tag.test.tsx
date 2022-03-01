
import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag', () => {
  describe('on render', () => {
    it('renders a single element with the provided text content', () => {
      const tagText = 'Tag text!';
      render(<Tag text={tagText} />);
      screen.getByText(tagText);
    });
  });
});