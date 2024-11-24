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
    // Render the Card component with props
    render(<Card {...props} />);

    // Check if the title is rendered correctly
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Check if the description is rendered correctly
    expect(screen.getByText(props.description)).toBeInTheDocument();

    // Check if the image is rendered with the correct src and alt attributes
    const imageElement = screen.getByAltText(props.title); // Alt text should match the title
    expect(imageElement).toHaveAttribute('src', props.image);
    expect(imageElement).toHaveAttribute('alt', props.title);
  });

  test('should render the image with the correct alt text', () => {
    render(<Card {...props} />);
    
    // Verify the image alt text matches the title
    const image = screen.getByAltText(props.title);
    expect(image).toBeInTheDocument();
  });

  test('should render the description text', () => {
    render(<Card {...props} />);
    
    // Verify the description text renders properly
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
