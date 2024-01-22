import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_LONDON_OVERGROUND,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_DLR,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
  SERVICE_NAME_LONDON_OVERGROUND,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_GATEWAY_DLR,
  OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
  OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBZFD', // Farringdon
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
                {
                  text: 'Trains to Luton Airport',
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
    topMostParentId: '910GFENCHRS', // Fenchurch Street
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
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
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
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_HILL_TUBE,
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
                  distance: OSI_DISTANCE_FENCHURCH_STREET_NATIONAL_RAIL_TOWER_GATEWAY_DLR,
                },
              ],
              mode: SERVICE_MODE_DLR,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBFPK', // Finsbury Park
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
    topMostParentId: '910GFRSTGT', // Forest Gate
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Wanstead Park',
                  distance: OSI_DISTANCE_FOREST_GATE_ELIZABETH_LINE_WANSTEAD_PARK_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LONDON_OVERGROUND,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;
