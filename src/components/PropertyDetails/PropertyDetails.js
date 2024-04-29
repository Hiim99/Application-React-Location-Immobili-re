import React from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from '../../PropertyContext';
import './PropertyDetails.scss'
import SlideShow from '../SlideShow/SlideShow';
import Collapse from '../Collapse/Collapse';


const PropertyDetails = () => {
  let { id } = useParams();
  const { properties } = useProperties();
  const property = properties.find(p => p.id === id);

  return (
    <div>
        <>
        <SlideShow pictures={property.pictures} title={property.title}/>
        <div className='head-description'>
          <div>
            <h1 className='property-title'>{property.title}</h1>
            <p className='property-location'>{property.location}</p>
          </div>
          <div className='host'>
            <h2 className='host-name'>{property.host.name}</h2>
            <img className='host-picture' src={property.host.picture} alt='host du bien'/> 
          </div>
        </div>
        <div>
          {property.tags.map((tag, index) => (
              <button className='tag-buttons' key={index}>{tag}</button>

          ))}
      </div>
      <div className='desc-equi'>
        <Collapse className='description' title="Description" content={property.description}/>
        <Collapse className='equipments' title="Equipements" content={property.equipments}/>
      </div>
      </>
    </div>
  );
};
export default PropertyDetails;