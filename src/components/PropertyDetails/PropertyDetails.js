import React from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from '../../PropertyContext';
import './PropertyDetails.scss';
import '../Collapse/Collapse.scss';
import SlideShow from '../SlideShow/SlideShow';
import Collapse from '../Collapse/Collapse';
import Error from '../Error/Error';

const PropertyDetails = () => {
  let { id } = useParams();
  const { properties } = useProperties();
  const property = properties.find(p => p.id === id);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<span key={`filled_${i}`} className="star filled">★</span>);
        } else {
            stars.push(<span key={`empty_${i}`} className="star">☆</span>);
        }
    }
    return stars;
};


  return (
    <div>
      {property ? (
        <>
          <SlideShow pictures={property.pictures} title={property.title} />
          <div className='head-description'>
            <div>
              <h1 className='property-title'>{property.title}</h1>
              <p className='property-location'>{property.location}</p>
            </div>
            <div className='host-rating'>
              <div className='host'>
                <h2 className='host-name'>{property.host.name}</h2>
                <img className='host-picture' src={property.host.picture} alt='host du bien'/> 
              </div>
              <div className='rating'>{renderStars(parseInt(property.rating))}</div>
            </div>
          </div>
          <div>
            {property.tags.map((tag, index) => (
              <button className='tag-buttons' key={index}>{tag}</button>
            ))}
          </div>
          <div className='desc-equi'>
            <Collapse className='description' title="Description" content={property.description}/>
            <Collapse classContent='equipments' title="Equipements"
                      content={property.equipments.map((equipment, index) => (
                      <span key={index}>{equipment}</span> 
              ))}
            /> 
          </div>
        </>
      ) : <Error />}
    </div>
  );
};

export default PropertyDetails;
