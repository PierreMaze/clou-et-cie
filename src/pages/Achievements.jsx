import { useState } from 'react';

import Carousel from '../components/Carousel.jsx';

import ChantierCuisine1 from '../assets/img/ChantierCuisine-1.webp';
import ChantierCuisine2 from '../assets/img/ChantierCuisine-2.webp';
import ChantierCuisine3 from '../assets/img/ChantierCuisine-3.webp';
import ChantierCuisine4 from '../assets/img/ChantierCuisine-4.webp';
import ChantierCuisine5 from '../assets/img/ChantierCuisine-5.webp';
import ChantierCuisine6 from '../assets/img/ChantierCuisine-6.webp';
import ChantierCuisine7 from '../assets/img/ChantierCuisine-7.webp';
import ChantierCuisine8 from '../assets/img/ChantierCuisine-8.webp';
import ChantierCuisine9 from '../assets/img/ChantierCuisine-9.webp';
import ChantierPlaterie1 from '../assets/img/ChantierPlaterie-1.webp';
import ChantierPlaterie2 from '../assets/img/ChantierPlaterie-2.webp';
import ChantierPlaterie3 from '../assets/img/ChantierPlaterie-3.webp';
import ChantierPlaterie4 from '../assets/img/ChantierPlaterie-4.webp';
import ChantierPlaterie5 from '../assets/img/ChantierPlaterie-5.webp';
import ChantierPlaterie6 from '../assets/img/ChantierPlaterie-6.webp';
import ChantierPlaterie7 from '../assets/img/ChantierPlaterie-7.webp';
import ChantierSanitaire1 from '../assets/img/ChantierSanitaire-1.webp';
import ChantierSanitaire2 from '../assets/img/ChantierSanitaire-2.webp';
import ChantierSanitaire3 from '../assets/img/ChantierSanitaire-3.webp';
import ChantierSanitaire4 from '../assets/img/ChantierSanitaire-4.webp';
import ChantierSanitaire5 from '../assets/img/ChantierSanitaire-5.webp';
import ChantierSanitaire6 from '../assets/img/ChantierSanitaire-6.webp';
import ChantierSanitaire7 from '../assets/img/ChantierSanitaire-7.webp';
import ChantierSanitaire8 from '../assets/img/ChantierSanitaire-8.webp';
import ChantierSanitaire9 from '../assets/img/ChantierSanitaire-9.webp';
import ChantierSanitaire10 from '../assets/img/ChantierSanitaire-10.webp';
import Maquette3D1 from '../assets/img/Maquette3D-1.webp';
import Maquette3D2 from '../assets/img/Maquette3D-2.webp';
import Maquette3D3 from '../assets/img/Maquette3D-3.webp';
import Maquette3D4 from '../assets/img/Maquette3D-4.webp';
import Maquette3D5 from '../assets/img/Maquette3D-5.webp';
import Maquette3D6 from '../assets/img/Maquette3D-6.webp';
import Maquette3D7 from '../assets/img/Maquette3D-7.webp';
import Maquette3D8 from '../assets/img/Maquette3D-8.webp';
import Maquette3D9 from '../assets/img/Maquette3D-9.webp';
import PlanArchi1 from '../assets/img/PlanArchi-1.webp';
import PlanArchi2 from '../assets/img/PlanArchi-2.webp';
import PlanArchi3 from '../assets/img/PlanArchi-3.webp';
import PlanArchi4 from '../assets/img/PlanArchi-4.webp';
import PlanArchi5 from '../assets/img/PlanArchi-5.webp';
import PlanArchi6 from '../assets/img/PlanArchi-6.webp';
import PlanArchi7 from '../assets/img/PlanArchi-7.webp';

import { TbHexagon3D } from 'react-icons/tb';
import { FaTrowel } from 'react-icons/fa6';
import { PiBathtubFill } from 'react-icons/pi';
import { MdKitchen } from 'react-icons/md';

const carouselData = {
  bathroom: {
    title: 'Salle de bain',
    description:
      'Rénovation et aménagement complet de votre salle de bain et sanitaire : carrelage, plomberie, installation de receveurs et créations sur-mesure.',
    images: [
      ChantierSanitaire1,
      ChantierSanitaire2,
      ChantierSanitaire3,
      ChantierSanitaire4,
      ChantierSanitaire5,
      ChantierSanitaire6,
      ChantierSanitaire7,
      ChantierSanitaire8,
      ChantierSanitaire9,
      ChantierSanitaire10,
    ],
  },
  kitchen: {
    title: 'Cuisine',
    description:
      'Montage, pose et fabrication de cuisines sur-mesure, avec installation d’équipements encastrés et finitions soignées.',
    images: [
      ChantierCuisine1,
      ChantierCuisine2,
      ChantierCuisine3,
      ChantierCuisine4,
      ChantierCuisine5,
      ChantierCuisine6,
      ChantierCuisine7,
      ChantierCuisine8,
      ChantierCuisine9,
    ],
  },
  plasterwork: {
    title: 'Plâterie',
    description:
      'Création et rénovation de surfaces avec isolation thermique et phonique, bandes de masquage, et finitions de qualité.',
    images: [
      ChantierPlaterie1,
      ChantierPlaterie2,
      ChantierPlaterie3,
      ChantierPlaterie4,
      ChantierPlaterie6,
      ChantierPlaterie7,
      ChantierPlaterie5,
    ],
  },
  mockup3d: {
    title: 'Maquette 3D',
    description:
      'Conception de visuels 3D immersifs et maquettes sur-mesure pour mieux visualiser vos projets.',
    images: [
      Maquette3D1,
      Maquette3D2,
      Maquette3D3,
      Maquette3D4,
      Maquette3D5,
      Maquette3D6,
      Maquette3D7,
      Maquette3D8,
      Maquette3D9,
      PlanArchi1,
      PlanArchi2,
      PlanArchi3,
      PlanArchi4,
      PlanArchi5,
      PlanArchi6,
      PlanArchi7,
    ],
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
            {navItems.map((item) => (
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
                    <Carousel images={carouselData[category].images} />
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

export default Tabs;
