
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  describe('on render', () => {
    it('renders a single button with accessible name as text', () => {
      const buttonText = 'Am button';
      render(<Button text={buttonText} clickHandler={() => { }} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName(buttonText);
    });
    it('is enabled by default', () => {
      render(<Button text={''} clickHandler={() => { }} />);
      const button = screen.getByRole('button');
      expect(button).toBeEnabled();
    });
    it('is disabled when prop disabled=true', () => {
      render(<Button text={''} clickHandler={() => { }} disabled={true} />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });
  describe('on click', () => {
    it('if disabled, does not fire clickHandler', () => {
      const buttonText = 'Am button';
      const clickHandlerMock = jest.fn();
      render(<Button text={buttonText} clickHandler={clickHandlerMock} disabled={true} />);

      const button = screen.getByRole('button');
      userEvent.click(button);

      expect(clickHandlerMock).toHaveBeenCalledTimes(0);
    });
    it('if enabled, fires clickHandler exactly once', () => {
      const buttonText = 'Am button';
      const clickHandlerMock = jest.fn();
      render(<Button text={buttonText} clickHandler={clickHandlerMock} />);

      const button = screen.getByRole('button');
      userEvent.click(button);

      expect(clickHandlerMock).toHaveBeenCalledTimes(1);
    });
  });
});