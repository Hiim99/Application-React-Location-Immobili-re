import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import './SlideShow.scss';

const SlideShow = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <div>No images available</div>;
  }

  const properties = {
    indicators: true,
    onChange: (previous, next) => setCurrentIndex(next),
  };

  return (
    <div className="property-details-container">
       <div className="image-counter">{`${currentIndex + 1} / ${pictures.length}`}</div>
      {pictures.length === 1 ? (
        <div className="each-slide">
          <img className='carousel' src={pictures[0]} alt={`${title} - 1`} />
        </div>
      ) : (
        <Slide {...properties}>
          {pictures.map((picture, index) => (
            <div key={index} className="each-slide">
              <img className='carousel' src={picture} alt={`${title} - ${index + 1}`} />
            </div>
          ))}
        </Slide>
      )}
    </div>
  );
};

export default SlideShow;
