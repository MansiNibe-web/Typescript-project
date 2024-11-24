import { expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders the App component correctly', () => {
  render(<App />);

  // Check for header
  expect(screen.getByText(/Welcome to the App/i)).toBeInTheDocument();

  // Check for Button
  expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
});

test('when click on the btton it will show an alert message ',()=>{
    render(<App/>
    )

    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

  // Find the button and simulate a click event
  const button = screen.getByText('Click Me');
  fireEvent.click(button);

  // Assert that the alert function was called with the correct message
  expect(alertMock).toHaveBeenCalledWith('Button clicked!');

  // Clean up the mock
  alertMock.mockRestore();
})
