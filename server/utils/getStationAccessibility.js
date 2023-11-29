import mapAccessibility from '../data/mapAccessibility.js';

const getStationAccessibility = ({ id, naptanId, topMostParentId }) => {
  const station = mapAccessibility.stations.find((station) => station.topMostParentId === topMostParentId);
  if (!station) return null;
  if (id) {
    const service = station.services.find((service) => service.id === id && service.naptanId === naptanId);
    if (!service) return null;
    return service.access; // String (used for maps)
  }
  return station.services; // Array of services (used for individual stations)
};

export default getStationAccessibility;
