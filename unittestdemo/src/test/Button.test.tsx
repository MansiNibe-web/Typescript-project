import { fireEvent, render, screen,  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, test } from 'vitest';
import { Button } from '../Componens/Button';
describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Submit" onClick={() => {}} />);
    const buttonElement = screen.getByText('Submit');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn(); // Mock function to track calls
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText('Click Me');
    await userEvent.click(buttonElement); // Simulate a user click
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  const ButtonWithAlert = () => {
    const handleClick = () => {
      alert('Button clicked!');
    };
  
    return <button onClick={handleClick}>Click Me</button>;
  };
  test('calls alert only once when the button is clicked', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ButtonWithAlert />);
  
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
  
    expect(alertMock).toHaveBeenCalledTimes(1);
  
    alertMock.mockRestore();
  });
  
});
