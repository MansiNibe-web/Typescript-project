import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To simulate routing for the Link component
import Home from '../Components/Home';
import { describe, expect, test } from 'vitest';



describe('Home Component', () => {
  test('renders the header with the title "Welcome to My App"', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const headerTitle = screen.getByText(/Welcome to My App/);
    expect(headerTitle).toBeInTheDocument();
  });

  test('renders the correct number of Flowercard components', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const flowerCards = screen.getAllByRole('img'); // Based on the mock, Flowercards will have <img> tags
    expect(flowerCards.length).toBe(6); // 6 featured flowers in the array
  });

  test('renders the Flowercard with correct image, title, and description', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const firstFlowercard = screen.getByAltText(/Cushion Chrysanthemum/);
    expect(firstFlowercard).toBeInTheDocument();

    const firstFlowerTitle = screen.getByText(/Cushion Chrysanthemum/);
    expect(firstFlowerTitle).toBeInTheDocument();

    const firstFlowerDescription = screen.getByText(/A variety of the common chrysanthemum/);
    expect(firstFlowerDescription).toBeInTheDocument();
  });

  test('renders the "More Flowers" button with the correct link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const moreFlowersButton = screen.getByRole('button', { name: /More Flowers/ });
    expect(moreFlowersButton).toBeInTheDocument();

    const linkElement = screen.getByRole('link', { name: /More Flowers/ });
    expect(linkElement).toHaveAttribute('href', '/more-flowers');
  });
});
