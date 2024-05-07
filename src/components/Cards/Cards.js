import React from 'react';
import './Cards.scss';
import { useProperties } from '../../PropertyContext';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const { properties } = useProperties();
  const navigate = useNavigate();

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="properties-container">
      <div className="properties">
        {properties.map((property) => (
          <div key={property.id} className="property-card" onClick={() => handlePropertyClick(property.id)}>
            <img src={property.cover} alt={property.title} className="property-image" />
            <h2 className="property-title">{property.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;
