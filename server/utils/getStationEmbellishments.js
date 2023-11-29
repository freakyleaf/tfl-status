import mapEmbellishments from '../data/mapEmbellishments.js';

const getStationEmbellishments = ({ topMostParentId }) => {
  const station = mapEmbellishments.stations.find((station) => station.topMostParentId === topMostParentId);
  return station ? station.embellishments : null;
};

export default getStationEmbellishments;
