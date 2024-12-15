import { useState, Suspense, lazy } from 'react';

import tabsData from '../data/tabsData.js';
import carouselData from '../data/carouselData.js';

const Carousel = lazy(() => import('../components/Carousel.jsx'));

const Archievements = () => {
  const [activeTab, setActiveTab] = useState('bathroom');

  return (
    <div className="py-24 bg-orange-50 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center" id="realisations">
          <h2 className="font-semibold text-orange-700 text-base/7">
            Mes réalisation
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 text-pretty sm:text-5xl lg:text-balance">
            Explorez l&apos;étendue de mon savoir-faire.
          </p>
          <p className="mt-6 text-stone-600 text-lg/8">
            Je met tout en œuvre pour transformer vos idées en réalité.
          </p>
        </div>
        <div className="mt-12 lg:mt-20 lg:mx-12 2xl:-ml-24 md:flex">
          <ul className="w-full mb-8 space-y-4 text-sm font-medium text-stone-400 lg:w-1/6 lg:mb-4 space-y md:me-4 md:mb-0">
            {tabsData.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`inline-flex items-center px-4 py-3 w-full justify-center lg:justify-start rounded-lg ${
                    activeTab === item.id
                      ? 'text-stone-50 bg-orange-700'
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
          <div className="w-full p-6 rounded-lg text-stone-400 bg-stone-800 text-medium">
            {Object.keys(carouselData).map(
              (category) =>
                activeTab === category && (
                  <div key={category}>
                    <h3 className="mb-4 text-lg font-bold uppercase text-stone-100 lg:mx-4">
                      {carouselData[category].title}
                    </h3>
                    <p className="font-normal tracking-wider text-md lg:mx-4 text-stone-400">
                      {carouselData[category].description}
                    </p>
                    <Suspense
                      fallback={<div>Chargement des réalisations...</div>}
                    >
                      <Carousel images={carouselData[category].images} />
                    </Suspense>
                  </div>
                )
            )}
            <p className="text-xs font-semibold tracking-wider text-center lg:mx-4 text-stone-500">
              Toutes les images sont soumises aux droits d&apos;auteur et ne
              peuvent être utilisées sans autorisation préalable.
            </p>
            <p className="text-xs font-semibold tracking-wider text-center lg:mx-4 text-stone-500">
              © Copyright. Tous droits réservés.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full mx-auto mt-12 -mb-6">
          <a
            href="https://www.cloucompany.com/vid%C3%A9oth%C3%A8que"
            target="_blank"
            className="w-full px-8 py-3 mt-6 text-sm font-semibold leading-7 text-center duration-300 ease-in-out delay-100 bg-orange-700 rounded-lg shadow-sm text-orange-50 sm:max-w-none sm:w-fit hover:bg-orange-800"
          >
            Voir plus de mes réalisations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Archievements;
