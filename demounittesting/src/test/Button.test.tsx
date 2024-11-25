import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For better matchers like toBeInTheDocument
import { describe, it, expect, vi } from "vitest"; // Import Vitest functions explicitly
import Button from "../Components/Button";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("applies the correct className", () => {
    render(<Button label="Click me" className="btn-primary" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toHaveClass("btn-primary");
  });
});
