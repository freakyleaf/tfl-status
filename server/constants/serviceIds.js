export const SERVICE_ID_BAKERLOO = 'bakerloo';
export const SERVICE_ID_BUS = 'bus';
export const SERVICE_ID_CABLE_CAR = 'london-cable-car';
export const SERVICE_ID_CENTRAL = 'central';
export const SERVICE_ID_CIRCLE = 'circle';
export const SERVICE_ID_DISTRICT = 'district';
export const SERVICE_ID_DLR = 'dlr';
export const SERVICE_ID_ELIZABETH = 'elizabeth';
export const SERVICE_ID_HAMMERSMITH_CITY = 'hammersmith-city';
export const SERVICE_ID_JUBILEE = 'jubilee';
export const SERVICE_ID_LONDON_OVERGROUND = 'london-overground';
export const SERVICE_ID_METROPOLITAN = 'metropolitan';
export const SERVICE_ID_NATIONAL_RAIL = 'national-rail';
export const SERVICE_ID_NORTHERN = 'northern';
export const SERVICE_ID_PICCADILLY = 'piccadilly';
export const SERVICE_ID_RIVER_BUS_1 = 'rb1';
export const SERVICE_ID_RIVER_BUS_2 = 'rb2';
export const SERVICE_ID_RIVER_BUS_4 = 'rb4';
export const SERVICE_ID_RIVER_BUS_6 = 'rb6';
export const SERVICE_ID_THAMES_RIVER_SERVICES = 'thames-river-services';
export const SERVICE_ID_TRAM = 'tram';
export const SERVICE_ID_VICTORIA = 'victoria';
export const SERVICE_ID_WATERLOO_CITY = 'waterloo-city';
export const SERVICE_ID_WOOLWICH_FERRY = 'woolwich-ferry';

export const busServiceIds = [
  SERVICE_ID_BUS,
];

export const dlrServiceIds = [
  SERVICE_ID_DLR,
];

export const elizabethLineServiceIds = [
  SERVICE_ID_ELIZABETH,
];

export const overgroundServiceIds = [
  SERVICE_ID_LONDON_OVERGROUND,
];

export const nationalRailServiceIds = [
  SERVICE_ID_NATIONAL_RAIL,
];

export const riverBusServiceIds = [
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_4,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_WOOLWICH_FERRY,
];

export const tramServiceIds = [
  SERVICE_ID_TRAM,
];

export const tubeServiceIds = [
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CENTRAL,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_METROPOLITAN,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_PICCADILLY,
  SERVICE_ID_VICTORIA,
  SERVICE_ID_WATERLOO_CITY,
];

// Ordered as they need to appear
export const coreServiceIds = [
  ...tubeServiceIds,
  ...overgroundServiceIds,
  ...elizabethLineServiceIds,
  ...dlrServiceIds,
  ...tramServiceIds,
];
