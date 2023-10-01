// The data can include duplicated line status content
// Check that we don't already have the `reason` attributed to another line status
function reasonIsUnique(reason, lineStatusesConformed) {
  let isUnique = true;

  lineStatusesConformed.forEach((lineStatusCombined) => {
    if (lineStatusCombined.reason.find((existingReason) => existingReason === reason)) isUnique = false;
  });

  return isUnique;
}

export default function conformStatusSeverity(services) {
  services.forEach((service) => {
    service.lineStatusesConformed = [];

    service.lineStatuses.forEach((lineStatus) => {
      // We can have multiple statuses for a line so we need to check if we've already added the status to the array
      const existingStatus = service.lineStatusesConformed.find((lineStatusCombined) => lineStatusCombined.statusSeverityDescription === lineStatus.statusSeverityDescription);

      if (existingStatus) {
        existingStatus.reason.push(lineStatus.reason);
        return;
      }

      service.lineStatusesConformed.push({
        reason: lineStatus.reason && reasonIsUnique(lineStatus.reason, service.lineStatusesConformed) ? [ lineStatus.reason ] : [],
        statusSeverity: lineStatus.statusSeverity,
        statusSeverityDescription: lineStatus.statusSeverityDescription,
      });
    });
  });
  return services;
}
