import mapEmbellishments from '../data/mapEmbellishments.js';

const getStationEmbellishments = ({ id, naptanId }) => {
  const service = mapEmbellishments.services.find((service) => service.id === id);
  if (!service) return null;
  const station = service.stations.find((station) => station.id === naptanId);
  return station ? station.embellishments : null;
};

export default getStationEmbellishments;
