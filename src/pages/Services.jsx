import PictureServices from '../assets/img/PictureServices.webp';

import { FaHammer, FaTrowel } from 'react-icons/fa6';
import { PiBathtubFill } from 'react-icons/pi';
import { MdKitchen } from 'react-icons/md';

const services = [
  {
    id: 1,
    title: 'Salle de Bain.',
    description:
      'Transformez votre salle de bain en un espace fonctionnel et moderne :',
    list: [
      'Rénovation complète ou partielle.',
      'Installation sanitaire.',
      'Pose de carrelage.',
    ],
    icon: PiBathtubFill,
  },
  {
    id: 2,
    title: 'Cuisine.',
    description: 'Aménagez une cuisine à la hauteur de vos attentes :',
    list: [
      'Préparation et installation de votre cuisine.',
      'Pose de carrelage.',
      "Solution pour optimiser l'espace.",
    ],
    icon: MdKitchen,
  },
  {
    id: 3,
    title: 'Plâtrerie.',
    description:
      'Améliorez vos espaces intérieurs avec des travaux de plâtrerie de qualité :',
    list: [
      'Pose de cloisons pour créer de nouveaux espaces.',
      "Réalisation d'enduits pour des finitions parfaites.",
      'Travaux d’isolation thermique et phonique.',
    ],
    icon: FaTrowel,
  },
  {
    id: 4,
    title: 'Petits Travaux et Réparations.',
    description:
      'Pour vos besoins ponctuels, je propose des interventions rapides et fiables :',
    list: [
      'Réparations mineures.',
      'Ajustements divers pour entretenir votre habitat.',
      'Assistance pour vos petits travaux du quotidien.',
    ],
    icon: FaHammer,
  },
];

const Services = () => {
  return (
    <div className="py-24 overflow-hidden bg-orange-50 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8" id="services">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold text-orange-700 text-base/7">
                Des services complets
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 text-pretty sm:text-5xl">
                pour tous vos travaux.
              </p>
              <p className="mt-6 text-stone-600 text-lg/8">
                Que ce soit pour une rénovation, des travaux de plomberie ou des
                aménagements intérieurs, je vous accompagne à chaque étape, avec
                des solutions adaptées à vos besoins.
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-stone-600 text-base/7 lg:max-w-none">
                {services.map((service) => (
                  <div key={service.id} className="relative ml-4">
                    <dt className="flex -ml-2 space-x-1 font-normal text-stone-900">
                      <service.icon
                        aria-hidden="true"
                        className="inline mr-2 -mt-2 text-orange-700 lg:mt-0 size-10 lg:size-6"
                      />
                      <div className="inline">
                        <strong>{service.title}</strong>
                        &nbsp;{service.description}
                      </div>
                    </dt>
                    <dd>
                      <ul className="pl-10 mt-2 list-disc text-stone-700">
                        {service.list.map((element, index) => (
                          <li className="indent-2" key={index}>
                            {element}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex">
              <a
                href="#contact"
                className="w-full py-4 mt-10 text-sm font-semibold leading-7 text-center duration-300 ease-in-out delay-100 bg-orange-700 rounded-lg shadow-sm lg:ml-6 mx- text-orange-50 sm:max-w-none sm:w-fit sm:px-8 hover:bg-orange-900"
              >
                Obtenir votre devis gratuit
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              alt="Product screenshot"
              src={PictureServices}
              width={2432}
              height={1442}
              className="sticky top-10 w-full max-w-none rounded-xl ring-1 shadow-xl ring-stone-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
