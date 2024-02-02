import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_INFO,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
} from '../../constants/serviceIds.js';

import {
  SERVICE_INFO_GATWICK_AIRPORT,
  SERVICE_INFO_LUTON_AIRPORT,
} from '../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_BAKERLOO,
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBNGW', // North Greenwich
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'North Greenwich Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'North Greenwich Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'North Greenwich Pier',
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
    topMostParentId: '930GMIL', // North Greenwich Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'North Greenwich',
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
    topMostParentId: '940GZZLUNKP', // Northwick Park
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_BAKERLOO,
              labels: [
                {
                  text: 'Kenton',
                  distance: OSI_DISTANCE_KENTON_TUBE_NORTHWICK_PARK_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_BAKERLOO,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBNWD', // Norwood Junction
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
];

export default stationEmbellishments;
