function formatServiceModes(services) {
  return Object.keys(services).flatMap((mode) => {
    return services[mode];
  });
}

function reasonIsUnique(reasons, newReason) {
  return !reasons.some((reason) => reason === newReason);
}

function statusIsUnique(statuses, newStatus) {
  return !statuses.some((status) => status.description === newStatus.description);
}

function reconcileStatuses(modes) {
  Object.values(modes).forEach((mode) => {
    mode.forEach((service) => {
      service.reasonsConformed = [];
      service.statusesConformed = [];

      service.statuses.forEach((status) => {
        if (status.reason && reasonIsUnique(service.reasonsConformed, status.reason)) {
          service.reasonsConformed.push(status.reason);
        }

        if (!statusIsUnique(service.statusesConformed, status)) return;

        service.statusesConformed.push({
          description: status.description,
          severity: status.severity,
        });
      });

      delete service.statuses;
    });
  });

  return modes;
}

export default function conformServices(services) {
  return formatServiceModes(reconcileStatuses(services));
}
