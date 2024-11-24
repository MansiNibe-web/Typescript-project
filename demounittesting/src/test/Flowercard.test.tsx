import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Flowercard from '../Components/Flowercard';

describe('Flowercard Component', () => {
  const props = {
    image: 'https://example.com/flower.jpg',
    title: 'Beautiful Flower',
    description: 'A description of a beautiful flower.',
    className: 'custom-class'
  };

  test('renders Flowercard component with image, title, and description', () => {
    // Render the Flowercard component with props
    render(<Flowercard {...props} />);

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
    render(<Flowercard {...props} />);

    // Verify the image alt text matches the title
    const image = screen.getByAltText(props.title);
    expect(image).toBeInTheDocument();
  });

  test('should render the description text', () => {
    render(<Flowercard {...props} />);

    // Verify the description text renders properly
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  test('applies the custom className prop', () => {
    render(<Flowercard {...props} />);

    // Verify that the custom className is applied to the card div
    const cardElement = screen.getByRole('img').closest('div'); // Get the parent div of the image
    expect(cardElement).toHaveClass(props.className);
  });

  test('should not apply any className when not provided', () => {
    const { container } = render(<Flowercard {...{ ...props, className: undefined }} />);
    
    // Verify that the card div does not have a custom className
    const cardElement = container.querySelector('.card');
    expect(cardElement).not.toHaveClass('custom-class');
  });
});
