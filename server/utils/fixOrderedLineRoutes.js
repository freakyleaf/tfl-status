const fixOrderedLineRoutes = ({ orderedLineRoutesRaw }) => {
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
