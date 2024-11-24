import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
