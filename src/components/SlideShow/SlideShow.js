import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './SlideShow.scss'

const SlideShow = ({ pictures, title }) => {
  if (!pictures || pictures.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="property-details-container">
      <Slide>
        {pictures.map((picture, index) => (
          <div key={index} className="each-slide">
            <img className='carousel' src={picture} alt={`${title} - ${index}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
