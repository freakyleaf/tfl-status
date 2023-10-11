const createServices = (data) => {
  return data.map((datum) => {
    return {
      id: datum.id,
      mode: datum.modeName,
      name: datum.name,
      statuses: datum.lineStatuses.map((lineStatus) => {
        return {
          description: lineStatus.statusSeverityDescription,
          reason: lineStatus.reason || null,
          severity: lineStatus.statusSeverity,
        };
      }),
    };
  });
};

export default createServices;
