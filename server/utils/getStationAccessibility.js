import mapAccessibility from '../data/mapAccessibility.js';

const getStationAccessibility = ({ id, naptanId }) => {
  const service = mapAccessibility.services.find((service) => service.id === id);
  const station = service.stations.find((station) => station.id === naptanId);
  return station ? station.access : null;
};

export default getStationAccessibility;
