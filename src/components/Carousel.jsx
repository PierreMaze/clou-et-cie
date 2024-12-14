import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';

const Carousel = ({ images, heightClass = 'h-56 md:h-96' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="gallery" className="relative w-full lg:py-6" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className={`relative overflow-hidden rounded-lg ${heightClass}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item={index === currentIndex ? 'active' : undefined}
          >
            <img
              src={image}
              className="absolute block h-auto max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <HiOutlineArrowNarrowLeft
            aria-hidden="true"
            className="inline mr-2 text-stone-50 size-4"
          />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <HiOutlineArrowNarrowRight
            aria-hidden="true"
            className="inline mr-2 text-stone-50 size-4"
          />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  heightClass: PropTypes.string,
};

export default Carousel;
