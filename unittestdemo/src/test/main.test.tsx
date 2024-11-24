import { render, screen, act } from '@testing-library/react'; // Import act
import { expect, test } from 'vitest';
import { createRoot } from 'react-dom/client';
import App from '../App';
import { StrictMode } from 'react';

test('renders the App component without crashing', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Wrap the render call inside act
  act(() => {
    createRoot(container).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });

  // Check for the correct text inside your App
  // Replace 'Welcome to the App' with actual text in your App component
  expect(screen.getByText(/Welcome to the App/i)).toBeInTheDocument();
});

