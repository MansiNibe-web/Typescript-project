import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Flowergallary from '../Components/Flowergallary';

vi.mock('./Flowercard', () => ({
  default: ({ image, title, description }: { image: string; title: string; description: string }) => (
    <div data-testid="flower-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  ),
}));

describe('Flowergallary Component', () => {
  test('renders the gallery title', () => {
    render(<Flowergallary />);
    expect(screen.getByText('Flower Gallery')).toBeInTheDocument();
  });

  test('renders the correct number of flower cards', () => {
    render(<Flowergallary />);
    const flowerCards = screen.getAllByTestId('flower-card');
    expect(flowerCards).toHaveLength(9); 
  });

  test('has the correct structure', () => {
    const { container } = render(<Flowergallary />);
    expect(container.querySelector('.flower-gallery')).toBeInTheDocument();
    expect(container.querySelector('.header-title')).toHaveTextContent('Flower Gallery');
    expect(container.querySelector('.gallery')).toBeInTheDocument();
  });
});
