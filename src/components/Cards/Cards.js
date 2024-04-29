import React, { useState } from 'react';
import './Cards.scss';
import { useProperties } from '../../PropertyContext';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const initialVisibleProperties = 6;
  const [visibleProperties, setVisibleProperties] = useState(initialVisibleProperties);
  const { properties } = useProperties();
  const navigate = useNavigate();

  const showMoreProperties = () => {
    setVisibleProperties(properties.length); 
  };

  const showLessProperties = () => {
    setVisibleProperties(initialVisibleProperties); 
  };

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="properties-container">
      <div className="properties">
        {properties.slice(0, visibleProperties).map((property) => (
          <div key={property.id} className="property-card" onClick={() => handlePropertyClick(property.id)}>
            <img src={property.cover} alt={property.title} className="property-image" />
            <h2 className="property-title">{property.title}</h2>
          </div>
        ))}
      </div>
      <div className="button-container">
        {visibleProperties < properties.length ? (
          <button onClick={showMoreProperties} className="more-button">More</button>
        ) : (
          <button onClick={showLessProperties} className="less-button">Less</button>
        )}
      </div>
    </div>
  );
}

export default Properties;
