import React, { useState } from 'react';
import './SlideShow.scss';

const SlideShow = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <div>No images available</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="property-details-container">
      {pictures.length > 1 && (
        <div className="image-counter">{`${currentIndex + 1} / ${pictures.length}`}</div>
      )}
      
      <div className="slideshow-container">
        
        {pictures.length > 1 && (
          <>
            <button className="prev-arrow" onClick={prevSlide}>&#8592;</button>
          </>
        )}

        <img className='carousel' src={pictures[currentIndex]} alt={`${title} - ${currentIndex + 1}`} />

        {pictures.length > 1 && (
          <>
            <button className="next-arrow" onClick={nextSlide}>&#8594;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SlideShow;
