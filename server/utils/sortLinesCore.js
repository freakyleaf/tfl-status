import {
  coreServices,
} from '../constants/services.js';

const sortLinesCore = (lines) => {
  return lines.sort((a, b) => {
    const indexA = coreServices.findIndex((coreService) => a.id === coreService);
    const indexB = coreServices.findIndex((coreService) => b.id === coreService);
    return indexA - indexB;
  });
};

export default sortLinesCore;
