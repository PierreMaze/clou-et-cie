import RenovationPicture from '../assets/img/PictureBgHero.webp';
import {
  FaSink,
  FaKitchenSet,
  FaTrowel,
  FaHammer,
} from '../utils/FontAwesome.config.jsx';

const detailsAboutTheServices = [
  {
    id: 1,
    name: 'Salle de Bain.',
    description: (
      <>
        Transformez votre salle de bain en un espace fonctionnel et moderne :
        <ul className="list-disc">
          <li>Rénovation complète ou partielle.</li>
          <li>Installation sanitaire.</li>
          <li>Pose de carrelage et finitions soignées.</li>
        </ul>
      </>
    ),

    icon: FaSink,
  },
  {
    id: 2,
    name: 'Cuisine.',
    description: (
      <>
        Aménagez une cuisine à la hauteur de vos attentes :
        <ul className="list-disc">
          <li>Installation et rénovation de meubles.</li>
          <li>Pose de carrelage.</li>
          <li>Solutions sur mesure pour optimiser l’espace et l’esthétique.</li>
        </ul>
      </>
    ),

    icon: FaKitchenSet,
  },
  {
    id: 3,
    name: 'Plâtrerie.',
    description: (
      <>
        Améliorez vos espaces intérieurs avec des travaux de plâtrerie de
        qualité :
        <ul className="list-disc">
          <li>Pose de cloisons pour créer de nouveaux espaces.</li>
          <li>Réalisation d’enduits pour des finitions parfaites.</li>
          <li>Travaux d’isolation et décoration intérieure.</li>
        </ul>
      </>
    ),

    icon: FaTrowel,
  },
  {
    id: 4,
    name: 'Petits Travaux et Réparations.',
    description: (
      <>
        Pour vos besoins ponctuels, je propose des interventions rapides et
        fiables :
        <ul className="list-disc">
          <li>Réparations mineures.</li>
          <li>Ajustements divers pour entretenir votre habitat.</li>
          <li>Assistance pour vos petits travaux du quotidien.</li>
        </ul>
      </>
    ),

    icon: FaHammer,
  },
];

const Services = () => {
  return (
    <div className="h-screen">
      <div className="py-12 overflow-hidden sm:py-24">
        <div className="px-6 mx-auto max-w-7xl md:px-8 lg:px-10 xl:px-14 2xl:px-18">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 2xl:-ml-32 2xl:mr-19 min-[1900px]:-ml-64 min-[1900px]:mr-40 min-[2000px]:-ml-80 min-[2000px]:mr-30">
              <div className=" lg:max-w-lg 2xl:max-w-full">
                {/* <!--Header section--> */}
                <div>
                  <h2 className="text-lg font-semibold leading-7 text-orange-800 uppercase">
                    Des services complets
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight uppercase text-stone-900 font-kreon sm:text-4xl">
                    pour tous vos travaux
                  </p>
                  <p className="mt-6 font-medium leading-8 lg:mr-6 text-stone-800 text-md">
                    Que ce soit pour une rénovation, des travaux de plomberie ou
                    des aménagements intérieurs, je vous accompagne à chaque
                    étape, avec des solutions sur mesure et adaptées à vos
                    besoins.
                  </p>
                  <p className="mt-6 font-medium leading-8 lg:mr-6 text-stone-800 text-md">
                    Grâce à mon expérience, je vous garanti des résultats
                    durables et de qualité.
                  </p>
                </div>
                {/* <!--Services offered sections--> */}
                <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-stone-800 lg:max-w-none">
                  {detailsAboutTheServices.map((details) => (
                    <div
                      key={details.id}
                      className="relative ml-12 mr-2 lg:mr-0 lg:ml-9"
                    >
                      <div className="inline mr-1 font-semibold text-stone-900">
                        <span className="mr-4 -ml-10">
                          <details.icon
                            aria-hidden="true"
                            className="absolute text-orange-600 size-5 left-1 top-1 "
                          />
                        </span>
                        {details.name}
                      </div>
                      <div className="inline">{details.description}</div>
                    </div>
                  ))}
                </dl>
                {/* <!--Action button--> */}
                <button
                  onClick="window.location.href='#contact'"
                  className="w-full py-4 mx-auto mt-10 text-sm font-semibold leading-7 duration-300 ease-in-out delay-100 bg-orange-800 rounded-lg shadow-sm text-orange-50 lg:max-w-none md:w-fit md:px-8 hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                >
                  Obtener votre devis gratuit
                </button>
              </div>
            </div>
            {/* <!--Picture Renovation Container--> */}
            <img
              alt="Rooftop(= Terasse sur le toit) de luminescence."
              src={RenovationPicture}
              className="w-[24rem] max-w-full rounded-xl shadow-xl ring-1 ring-stone-400/10 lg:max-w-none sm:w-[50rem] md:-ml-4 lg:-ml-20 min-[2000px]:w-[90rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
