import { render, screen } from '@testing-library/react';
import Card from '../Components/Card';
import { describe, expect, test } from 'vitest';

describe('Card Component', () => {
  const props = {
    title: 'Card Title',
    description: 'This is a card description.',
    image: 'https://example.com/image.jpg'
  };

  test('renders Card component with title, description, and image', () => {
     render(<Card {...props} />);

     expect(screen.getByText(props.title)).toBeInTheDocument();

     expect(screen.getByText(props.description)).toBeInTheDocument();

     const imageElement = screen.getByAltText(props.title);  
    expect(imageElement).toHaveAttribute('src', props.image);
    expect(imageElement).toHaveAttribute('alt', props.title);
  });

  test('should render the image with the correct alt text', () => {
    render(<Card {...props} />);
    
     const image = screen.getByAltText(props.title);
    expect(image).toBeInTheDocument();
  });

  test('should render the description text', () => {
    render(<Card {...props} />);
    
     expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
