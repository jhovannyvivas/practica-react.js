import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({name, url}) => (
  <div className='carousel-item'>
    <div className='carousel-item__url'><p>{name}</p></div>
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon'/> 
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon'/> 
      </div>
      <p className='carousel-item__details--title'>{name}</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
        
    </div>
  </div>
);

/*CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number, 
};*/

export default CarouselItem;