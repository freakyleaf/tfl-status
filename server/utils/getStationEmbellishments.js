import stationEmbellishments from '../data/stationEmbellishments.js';

const getStationEmbellishments = ({ topMostParentId }) => {
  const station = stationEmbellishments.stations.find((station) => station.topMostParentId === topMostParentId);
  return station?.embellishments || null;
};

export default getStationEmbellishments;
