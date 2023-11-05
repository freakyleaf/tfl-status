const enrichMaps = ({ maps, reasons }) => {
  return maps.map((map) => {
    return {
      ...map,
      stations: map.stations.map((station) => {
        return {
          ...station,
        };
      }),
    };
  });
};

export default enrichMaps;
