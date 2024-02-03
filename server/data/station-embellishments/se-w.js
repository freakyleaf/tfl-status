import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_INFO,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CENTRAL,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_SOUTH_WESTERN_RAILWAY,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_THAMESLINK,
} from '../../constants/serviceIds.js';

import {
  SERVICE_INFO_BIRMINGHAM_AIRPORT,
  SERVICE_INFO_GATWICK_AIRPORT,
  SERVICE_INFO_LUTON_AIRPORT,
} from '../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_ELIZABETH_LINE,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_BAKERLOO,
  SERVICE_NAME_CENTRAL,
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
  SERVICE_NAME_ELIZABETH,
  SERVICE_NAME_HAMMERSMITH_CITY,
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
  SERVICE_NAME_SOUTH_WESTERN_RAILWAY,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_THAMESLINK,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
  OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
  OSI_DISTANCE_WOOLWICH_ELIZABETH_LINE_WOOLWICH_ARSENAL_DLR,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GWNSTDPK', // Wanstead Park
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_ELIZABETH,
              labels: [
                {
                  text: 'Forest Gate',
                  distance: OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_ELIZABETH_LINE,
              name: SERVICE_NAME_ELIZABETH,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBWFJ', // Watford Junction
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_BIRMINGHAM_AIRPORT,
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBWAT', // Waterloo
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'London Eye Waterloo Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GWLOE', // Waterloo East
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Southwark',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GWMP', // Waterloo Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_BAKERLOO,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_BAKERLOO,
            },
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTH_WESTERN_RAILWAY,
              labels: [
                {
                  text: 'Waterloo',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTH_WESTERN_RAILWAY,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBWHD', // West Hampstead
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_GATWICK_AIRPORT,
                },
                {
                  text: SERVICE_INFO_LUTON_AIRPORT,
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBWSM', // Westminster
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Westminster Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Westminster Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Westminster Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_6,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GWMR', // Westminster Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Westminster',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Westminster',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Westminster',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUWCY', // White City
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Wood Lane',
                  distance: OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              labels: [
                {
                  text: 'Wood Lane',
                  distance: OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUWLA', // Wood Lane
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CENTRAL,
              labels: [
                {
                  text: 'White City',
                  distance: OSI_DISTANCE_WHITE_CITY_TUBE_WOOD_LANE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CENTRAL,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GWOLWXR', // Woolwich
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Woolwich Arsenal',
                  distance: OSI_DISTANCE_WOOLWICH_ELIZABETH_LINE_WOOLWICH_ARSENAL_DLR,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBWWA', // Woolwich Arsenal
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_ELIZABETH,
              labels: [
                {
                  text: 'Woolwich',
                  distance: OSI_DISTANCE_WOOLWICH_ELIZABETH_LINE_WOOLWICH_ARSENAL_DLR,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_ELIZABETH,
            },
          ],
        },
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Woolwich Arsenal Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Woolwich Arsenal Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Woolwich Arsenal Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_6,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GWAS', // Woolwich Arsenal Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Woolwich Arsenal',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              labels: [
                {
                  text: 'Woolwich Arsenal',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
            {
              id: SERVICE_ID_THAMESLINK,
              labels: [
                {
                  text: 'Woolwich Arsenal',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_THAMESLINK,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GWWC', // Woolwich Ferry North Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'King George V',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;
