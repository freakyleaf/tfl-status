export const dlrServices = [
  'dlr',
];

export const elizabethLineServices = [
  'elizabeth',
];

export const overgroundServices = [
  'london-overground',
];

export const tramServices = [
  'tram',
];

export const tubeServices = [
  'bakerloo',
  'central',
  'circle',
  'district',
  'hammersmith-city',
  'jubilee',
  'metropolitan',
  'northern',
  'piccadilly',
  'victoria',
  'waterloo-city',
];

// Ordered as they need to appear
export const coreServices = [
  ...tubeServices,
  ...overgroundServices,
  ...elizabethLineServices,
  ...dlrServices,
  ...tramServices,
];
