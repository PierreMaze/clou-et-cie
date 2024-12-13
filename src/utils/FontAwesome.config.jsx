import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSink,
  faKitchenSet,
  faHammer,
  faTrowel,
} from '@fortawesome/free-solid-svg-icons';

export const FaSink = () => {
  return <FontAwesomeIcon icon={faSink} className="text-orange-800 size-5" />;
};

export const FaKitchenSet = () => {
  return (
    <FontAwesomeIcon icon={faKitchenSet} className="text-orange-800 size-5" />
  );
};

export const FaTrowel = () => {
  return <FontAwesomeIcon icon={faTrowel} className="text-orange-800 size-5" />;
};

export const FaHammer = () => {
  return <FontAwesomeIcon icon={faHammer} className="text-orange-800 size-5" />;
};
