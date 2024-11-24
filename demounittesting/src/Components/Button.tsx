import React from "react";

// Define the props interface
interface ButtonProps {
  label: string; // Text to display on the button
  onClick?: () => void; // Optional click handler
  className?: string; // Optional CSS classes for styling
}

// Button component
const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
