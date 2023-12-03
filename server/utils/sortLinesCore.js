import {
  coreServiceIds,
} from '../constants/serviceIds.js';

const sortLinesCore = (lines) => {
  return lines.sort((a, b) => {
    const indexA = coreServiceIds.findIndex((coreServiceId) => a.id === coreServiceId);
    const indexB = coreServiceIds.findIndex((coreServiceId) => b.id === coreServiceId);
    return indexA - indexB;
  });
};

export default sortLinesCore;
