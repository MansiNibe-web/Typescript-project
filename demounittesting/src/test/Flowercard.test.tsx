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
     render(<Flowercard {...props} />);

     expect(screen.getByText(props.title)).toBeInTheDocument();

     expect(screen.getByText(props.description)).toBeInTheDocument();

     const imageElement = screen.getByAltText(props.title);  
    expect(imageElement).toHaveAttribute('src', props.image);
    expect(imageElement).toHaveAttribute('alt', props.title);
  });

  test('should render the image with the correct alt text', () => {
    render(<Flowercard {...props} />);

    
    const image = screen.getByAltText(props.title);
    expect(image).toBeInTheDocument();
  });

  test('should render the description text', () => {
    render(<Flowercard {...props} />);

     expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  test('applies the custom className prop', () => {
    render(<Flowercard {...props} />);

     const cardElement = screen.getByRole('img').closest('div');    
    expect(cardElement).toHaveClass(props.className);
  });

  test('should not apply any className when not provided', () => {
    const { container } = render(<Flowercard {...{ ...props, className: undefined }} />);
    
     const cardElement = container.querySelector('.card');
    expect(cardElement).not.toHaveClass('custom-class');
  });
});
