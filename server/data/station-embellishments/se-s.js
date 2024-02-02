import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_EXTRA,
  SERVICE_GROUP_INFO,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_TRAM,
} from '../../constants/serviceIds.js';

import {
  SERVICE_INFO_SOUTHEND_AIRPORT,
} from '../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_EUROSTAR,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_TRAM,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_TRAM,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GSHENFLD', // Shenfield
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_SOUTHEND_AIRPORT,
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
    topMostParentId: '940GZZLUSWN', // South Wimbledon
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_TRAM,
              labels: [
                {
                  text: 'Morden Road',
                  distance: OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
                },
              ],
              mode: SERVICE_MODE_TRAM,
              name: SERVICE_NAME_TRAM,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUSWK', // Southwark
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              labels: [
                {
                  text: 'Waterloo East',
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBSRA', // Stratford
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: SERVICE_INFO_SOUTHEND_AIRPORT,
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
    topMostParentId: '940GZZDLSIT', // Stratford International (DLR)
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_EUROSTAR,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;
