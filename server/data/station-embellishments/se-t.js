import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_C2C,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_DLR,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_C2C,
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_TOWER_GATEWAY_DLR_TOWER_HILL_TUBE,
  OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_GATEWAY_DLR,
  OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBTOM', // Tottenham Hale
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              labels: [
                {
                  text: 'Trains to Gatwick Airport',
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
    topMostParentId: 'HUBTOG', // Tower Gateway
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Tower Hill',
                  distance: OSI_DISTANCE_TOWER_GATEWAY_DLR_TOWER_HILL_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Tower Hill',
                  distance: OSI_DISTANCE_TOWER_GATEWAY_DLR_TOWER_HILL_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_C2C,
              labels: [
                {
                  text: 'Fenchurch Street',
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_GATEWAY_DLR,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_C2C,
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
                  text: 'Tower Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Tower Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Tower Pier',
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
    topMostParentId: '940GZZLUTWH', // Tower Hill
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Tower Gateway',
                  distance: OSI_DISTANCE_TOWER_GATEWAY_DLR_TOWER_HILL_TUBE,
                },
              ],
              mode: SERVICE_MODE_DLR,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_C2C,
              labels: [
                {
                  text: 'Fenchurch Street',
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_C2C,
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
                  text: 'Tower Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Tower Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Tower Pier',
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
    topMostParentId: '930GTMP', // Tower Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Tower Hill',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Tower Hill',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Tower Gateway',
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
