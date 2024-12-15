import { TbHexagon3D } from 'react-icons/tb';
import { MdSafetyCheck } from 'react-icons/md';
import { FaFileContract } from 'react-icons/fa6';
import { HiMiniCheckBadge } from 'react-icons/hi2';

const commitments = [
  {
    id: 1,
    title: 'Une expertise reconnue',
    description:
      "Des années d'expertise pour réaliser vos projets alliant savoir-faire et expérience, pour transformer vos idées en réalité.",
    icon: HiMiniCheckBadge,
  },
  {
    id: 2,
    title: 'Des devis clairs et détaillés',
    description:
      'Chaque détail est pensé pour vous garantir une compréhension complète de vos dépenses et de vos options.',
    icon: FaFileContract,
  },
  {
    id: 3,
    title: 'Tranquillité grâce à une garantie décennale',
    description: (
      <>
        Chaque projet réalisé est couvert par une{' '}
        <a
          href="https://www.cloucompany.com/_files/ugd/dfd141_e41d602de6d7439a8a3a8d9dbe15a948.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 hover:underline hover:underline-8 hover:text-orange-500"
        >
          garantie décennale
        </a>
        . Ainsi qu&apos;inscrit au{' '}
        <a
          href="https://www.cloucompany.com/_files/ugd/dfd141_e41d602de6d7439a8a3a8d9dbe15a948.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 hover:underline hover:underline-8 hover:text-orange-500"
        >
          RMA (Registre des Métier et de l&apos;Artisanat)
        </a>
        .
      </>
    ),
    icon: MdSafetyCheck,
  },
  {
    id: 4,
    title: 'Visualisez vos projets en 3D',
    description:
      'Grâce à des outils de modélisation 3D, imaginer et de personnaliser vos espaces rénovés avant même le début des travaux.',
    icon: TbHexagon3D,
  },
];

const Commitment = () => {
  return (
    <div className="py-24 bg-stone-800 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8" id="engagements">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="font-semibold text-orange-600 text-base/7">
            Mes engagements
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-orange-50 text-pretty sm:text-5xl lg:text-balance">
            pour tous vos projets de rénovation.
          </p>
          <p className="mt-6 tracking-wide text-stone-400 text-lg/8">
            Depuis plus de 20 ans, je m’engage à réaliser des travaux de haute
            qualité, dans le respect des délais et des normes de sécurité.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {commitments.map((commitments) => (
              <div key={commitments.id} className="relative pl-16 lg:mx-4">
                <dt className="font-medium tracking-wide text-stone-50 text-base/7">
                  <div className="absolute top-0 left-0 flex items-center justify-center bg-orange-700 rounded-lg size-10">
                    <commitments.icon
                      aria-hidden="true"
                      className="text-orange-50 size-6"
                    />
                  </div>
                  {commitments.title}
                </dt>
                <dd className="mt-2 text-stone-500 text-base/7">
                  {commitments.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center w-full mx-auto mt-16 -mb-6">
          <a
            href="#contact"
            className="w-full px-8 py-3 mt-6 text-sm font-semibold leading-7 text-center duration-300 ease-in-out delay-100 bg-orange-700 rounded-lg shadow-sm text-orange-50 sm:max-w-none sm:w-fit hover:bg-orange-800"
          >
            Contactez moi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
