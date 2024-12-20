export const SERVICE_ID_AVANTI_WEST_COAST = 'avanti-west-coast';
export const SERVICE_ID_BAKERLOO = 'bakerloo';
export const SERVICE_ID_BUS = 'bus';
export const SERVICE_ID_C2C = 'c2c';
export const SERVICE_ID_CABLE_CAR = 'london-cable-car';
export const SERVICE_ID_CENTRAL = 'central';
export const SERVICE_ID_CHILTERN_RAILWAYS = 'chiltern-railways';
export const SERVICE_ID_CIRCLE = 'circle';
export const SERVICE_ID_DISTRICT = 'district';
export const SERVICE_ID_DLR = 'dlr';
export const SERVICE_ID_ELIZABETH = 'elizabeth';
export const SERVICE_ID_GREAT_NORTHERN = 'great-northern';
export const SERVICE_ID_GREATER_ANGLIA = 'greater-anglia';
export const SERVICE_ID_HAMMERSMITH_CITY = 'hammersmith-city';
export const SERVICE_ID_JUBILEE = 'jubilee';
export const SERVICE_ID_LIBERTY = 'liberty';
export const SERVICE_ID_LIONESS = 'lioness';
export const SERVICE_ID_METROPOLITAN = 'metropolitan';
export const SERVICE_ID_MILDMAY = 'mildmay';
export const SERVICE_ID_NATIONAL_RAIL = 'national-rail';
export const SERVICE_ID_NORTHERN = 'northern';
export const SERVICE_ID_PICCADILLY = 'piccadilly';
export const SERVICE_ID_RIVER_BUS_1 = 'rb1';
export const SERVICE_ID_RIVER_BUS_2 = 'rb2';
export const SERVICE_ID_RIVER_BUS_4 = 'rb4';
export const SERVICE_ID_RIVER_BUS_6 = 'rb6';
export const SERVICE_ID_SOUTH_WESTERN_RAILWAY = 'south-western-railway';
export const SERVICE_ID_SOUTHEASTERN = 'southeastern';
export const SERVICE_ID_SOUTHERN = 'southern';
export const SERVICE_ID_SUFFRAGETTE = 'suffragette';
export const SERVICE_ID_THAMES_RIVER_SERVICES = 'thames-river-services';
export const SERVICE_ID_THAMESLINK = 'thameslink';
export const SERVICE_ID_TRAM = 'tram';
export const SERVICE_ID_VICTORIA = 'victoria';
export const SERVICE_ID_WATERLOO_CITY = 'waterloo-city';
export const SERVICE_ID_WEAVER = 'weaver';
export const SERVICE_ID_WEST_MIDLANDS_TRAINS = 'west-midlands-trains';
export const SERVICE_ID_WINDRUSH = 'windrush';
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
  SERVICE_ID_LIBERTY,
  SERVICE_ID_LIONESS,
  SERVICE_ID_MILDMAY,
  SERVICE_ID_SUFFRAGETTE,
  SERVICE_ID_WEAVER,
  SERVICE_ID_WINDRUSH,
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
