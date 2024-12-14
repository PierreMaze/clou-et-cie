import { useState } from 'react';

import Carousel from '../components/Carousel.jsx';

import PictureBgHero from '../assets/img/PictureBgHero.webp';

import { TbHexagon3D } from 'react-icons/tb';
import { FaTrowel } from 'react-icons/fa6';
import { PiBathtubFill } from 'react-icons/pi';
import { MdKitchen } from 'react-icons/md';

const carouselData = {
  bathroom: {
    title: 'Salle de bain',
    images: [
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
    ],
  },
  kitchen: {
    title: 'Cuisine',
    images: [
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
      PictureBgHero,
    ],
  },
  plasterwork: {
    title: 'Plâterie',
    images: [PictureBgHero, PictureBgHero, PictureBgHero],
  },
  mockup3d: {
    title: 'Maquette 3D',
    images: [PictureBgHero, PictureBgHero, PictureBgHero],
  },
};

const navItems = [
  { id: 'bathroom', label: 'Salle de bain', icon: PiBathtubFill },
  { id: 'kitchen', label: 'Cuisine', icon: MdKitchen },
  { id: 'plasterwork', label: 'Plâterie', icon: FaTrowel },
  { id: 'mockup3d', label: 'Maquette 3D', icon: TbHexagon3D },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('bathroom');

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="font-semibold text-orange-800 text-base/7">
            Mes réalisation
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl lg:text-balance">
            Explorez l&apos;étendue de mon savoir-faire
          </p>
          <p className="mt-6 text-gray-600 text-lg/8">
            Je met tout en œuvre pour transformer vos idées en réalité.
          </p>
        </div>
        <div className="mt-12 lg:mx-12 md:flex">
          <ul className="w-full mb-8 space-y-4 text-sm font-medium text-gray-400 lg:w-1/6 lg:mb-4 space-y md:me-4 md:mb-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`inline-flex items-center px-4 py-3 w-full justify-center lg:justify-start rounded-lg ${
                    activeTab === item.id
                      ? 'text-stone-50 bg-orange-800'
                      : ' hover:text-stone-50 hover:bg-stone-700 bg-stone-800 delay-100 duration-300'
                  }`}
                >
                  <item.icon
                    aria-hidden="true"
                    className="inline mr-2 text-stone-50 size-4"
                  />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="w-full p-6 text-gray-400 rounded-lg bg-stone-900/90 text-medium">
            {Object.keys(carouselData).map(
              (category) =>
                activeTab === category && (
                  <div key={category}>
                    <h3 className="mb-4 text-lg font-bold text-orange-100 ">
                      {carouselData[category].title}
                    </h3>
                    <Carousel images={carouselData[category].images} />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="flex justify-center w-full mx-auto mt-16 -mb-6">
          <a
            href="https://www.cloucompany.com/vid%C3%A9oth%C3%A8que"
            target="_blank"
            className="w-full px-8 py-3 mt-6 text-sm font-semibold leading-7 text-center duration-300 ease-in-out delay-100 bg-orange-800 rounded-lg shadow-sm text-orange-50 sm:max-w-none sm:w-fit hover:bg-orange-900"
          >
            Voir toutes mes réalisations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
