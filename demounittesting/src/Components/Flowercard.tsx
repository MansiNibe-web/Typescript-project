import React from 'react';
import './Flowercard.css';

interface FlowerCardProps {
  image: string;
  title: string;
  description: string;
  className?: string; // Optional className prop for custom styling
}

const Flowercard: React.FC<FlowerCardProps> = ({ image, title, description, className }) => (
  <div className={`card ${className || ''}`}>
    <img src={image} alt={title} className="card-image" />
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

export default Flowercard;
