import React from 'react';
import './Banner.scss';
import BannerImg from '../../images/BannerImg.png';

const Banner = () => {
    return (
      <div className="banner">
         <img src={BannerImg} alt="Banner" />
         <div className="banner-text">Chez vous, partout et ailleurs</div>
      </div>
    );
  }

  export default Banner;