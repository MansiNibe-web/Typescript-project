import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from '../Components/Header';
describe('Header component', () => {
  
  test('renders with a valid title', () => {
    const testTitle = "Welcome to My Site"; 

    render(<Header title={testTitle} />); 

    const headerTitle = screen.getByRole('heading', { name: testTitle });

    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toHaveTextContent(testTitle); 
  });

  test('renders with an empty title', () => {
    const testTitle = ""; 

    render(<Header title={testTitle} />); 

    const headerTitle = screen.getByRole('heading'); 

    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toHaveTextContent(""); 
  });

  test('renders with a custom class name', () => {
    const testTitle = "Styled Header";
    render(<Header title={testTitle} />); 

    const header = screen.getByRole('banner'); 
    expect(header).toHaveClass('header'); 
  });

});
