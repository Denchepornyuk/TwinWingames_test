import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import PropTypes from 'prop-types';

const Drums = ({ slidesPerScroll, images, speed }) => {
  const carouselSettings = {
    slidesPerPage: 3,
    animationSpeed: 1000,
    infinite: true,
    draggable: false,
    addArrowClickHandler: true,
    arrowLeft: (<button
      className="slider__button"
      type="button"
    />
    ),
  };

  return (
    <Carousel
      className="carousel"
      slidesPerScroll={slidesPerScroll}
      {...carouselSettings}
      animationSpeed={speed}
    >
      {images.map(img => (
        <img
          src={`images/img_${img}.jpg`}
          alt={img}
          className="photo"
        />
      ))}
    </Carousel>
  );
};

Drums.propTypes = {
  slidesPerScroll: PropTypes.number.isRequired,
  images: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
};

export default Drums;
