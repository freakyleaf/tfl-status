import {
  SERVICE_ID_CIRCLE,
} from '../constants/serviceIds.js';

const fixOrderedLineRoutes = ({ id, orderedLineRoutesRaw }) => {
  // Circle line is missing the second Edgware Road station
  if (id === SERVICE_ID_CIRCLE) {
    return orderedLineRoutesRaw.map((orderedLineRoute) => {
      const edgwareRoad = orderedLineRoute.naptanIds.find((naptanId) => naptanId === '940GZZLUERC');
      const bakerStreetIndex = orderedLineRoute.naptanIds.findIndex((naptanId) => naptanId === '940GZZLUBST');
      const paddingtonIndex = orderedLineRoute.naptanIds.findIndex((naptanId) => naptanId === '940GZZLUPAH');
      // If Paddington follows Baker Street then Edgware Road is missing
      if (paddingtonIndex === bakerStreetIndex + 1) orderedLineRoute.naptanIds.splice(paddingtonIndex, 0, edgwareRoad);
      return orderedLineRoute;
    });
  }

  // Remove dupliacte route names
  const orderedLineRoutes = [];
  const routeNames = [];

  orderedLineRoutesRaw.forEach((orderedLineRoute) => {
    if (!routeNames.includes(orderedLineRoute.name)) {
      orderedLineRoutes.push(orderedLineRoute);
      routeNames.push(orderedLineRoute.name);
    }
  });

  return orderedLineRoutes;
};

export default fixOrderedLineRoutes;
