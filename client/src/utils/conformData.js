import serviceGroups from '@constants/serviceGroups';

function formatServiceGroups(services) {
  const output = {};

  serviceGroups.forEach((serviceGroup) => {
    output[serviceGroup.group] = {
      modes: serviceGroup.modes.flatMap((mode) => {
        return services[mode];
      }),
      name: serviceGroup.name,
      path: serviceGroup.path,
    };
  });

  return output;
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

export default function conformData(services) {
  return formatServiceGroups(reconcileStatuses(services));
}
