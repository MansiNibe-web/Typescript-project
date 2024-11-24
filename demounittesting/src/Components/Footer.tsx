import React from "react";

interface FooterProps {
  text: string; // Define the expected 'text' prop
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return <footer>{text}</footer>;
};

export default Footer;
