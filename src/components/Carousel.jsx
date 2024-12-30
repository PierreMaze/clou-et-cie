import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
  HiX,
} from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';

const Carousel = ({ images, heightClass = 'h-56 md:h-96' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Ajout d'un effet pour gérer la fermeture de la modal via la touche Echap
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    // Ajout d'un écouteur d'événement global
    window.addEventListener('keydown', handleEscapeKey);

    // Nettoyage de l'écouteur d'événement
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

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

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevModalImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextModalImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div id="gallery" className="relative w-full py-6" data-carousel="slide">
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
              {/* Lazy loading des images */}
              <LazyLoad height={200} offset={100} debounce={200}>
                <img
                  src={image.src}
                  onClick={() => openModal(index)}
                  className="absolute block h-full max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg cursor-pointer top-1/2 left-1/2"
                  alt={image.alt}
                />
              </LazyLoad>
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
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full lg:ml-4 lg:w-10 lg:h-10 bg-orange-800/30 group-hover:bg-orange-800/60 group-focus:ring-4 group-focus:ring-orange-800/70 group-focus:outline-none">
            <HiOutlineArrowNarrowLeft
              aria-hidden="true"
              className="inline text-stone-50 size-4"
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
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full lg:mr-4 lg:w-10 lg:h-10 bg-orange-800/30 group-hover:bg-orange-800/60 group-focus:ring-4 group-focus:ring-orange-800/70 group-focus:outline-none">
            <HiOutlineArrowNarrowRight
              aria-hidden="true"
              className="inline text-stone-50 size-4"
            />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-stone-900 bg-opacity-80"
          onClick={(event) => {
            // Vérification explicite que le clic est sur le fond noir
            if (event.target.classList.contains('bg-stone-900')) {
              closeModal();
            }
          }}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={closeModal}
              className="absolute p-2 text-white bg-orange-700 rounded-full top-4 right-4 z-60 hover:bg-orange-800"
            >
              <HiX className="size-6" />
            </button>

            <button
              onClick={prevModalImage}
              className="absolute p-2 text-white rounded-full top-1/2 left-4 z-60 bg-orange-700/50 hover:bg-orange-800/50"
            >
              <HiOutlineArrowNarrowLeft className="size-8" />
            </button>

            <button
              onClick={nextModalImage}
              className="absolute p-2 text-white rounded-full top-1/2 right-4 z-60 bg-orange-700/50 hover:bg-orange-800/50"
            >
              <HiOutlineArrowNarrowRight className="size-8" />
            </button>

            <img
              src={images[modalImageIndex].src}
              alt={
                images[modalImageIndex].alt || `Image ${modalImageIndex + 1}`
              }
              className="object-contain w-screen h-screen max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  heightClass: PropTypes.string,
};

export default Carousel;
