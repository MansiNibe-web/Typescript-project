// Footer.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "../Components/Footer";

describe("Footer component", () => {
  test("renders the correct text from prop", () => {
    const testText = "This is a footer text"; 

    render(<Footer text={testText} />); 
    
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("renders with an empty text", () => {
    const testText = ""; 
  
    render(<Footer text={testText} />); 
  
    const footerElement = screen.getByRole('contentinfo');
    
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(""); 
  });
  

  test("renders with a different text", () => {
    const testText = "Another footer text";

    render(<Footer text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
