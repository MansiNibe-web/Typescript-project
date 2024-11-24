import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string; // New prop for the image source
  
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} /> {/* Display the image */}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
