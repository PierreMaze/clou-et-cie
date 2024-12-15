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

export default services;
